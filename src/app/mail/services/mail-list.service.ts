import {
  HttpClient,
  HttpEventType,
  HttpResponse,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { environment as E } from '../../../environments/environment';

import { MailListState, Mail, MailList, RequestParams } from '../mail.model';

export type SetStateCallback = (state: MailListState) => MailListState;

const initialState: MailListState = {
  folder: 'Inbox',
  mailList: {
    items: [],
    itemsCount: 0,
  },
  isLoading: false,
  error: '',
  searchText: '',
  skip: 0,
  take: 0,
  newestFirst: true,
};

@Injectable({
  providedIn: 'root',
})
export class MailListService {
  private readonly subject: BehaviorSubject<MailListState> =
    new BehaviorSubject(initialState);
  public readonly state$: Observable<MailListState> =
    this.subject.asObservable();
  public readonly mails$: Observable<Mail[]> = this.state$.pipe(
    map((state) => {
      return state.mailList.items;
    }),
    distinctUntilChanged()
  );
  public readonly mailsCount$: Observable<number> = this.state$.pipe(
    map((state) => {
      return state.mailList.itemsCount;
    }),
    distinctUntilChanged()
  );
  public readonly isLoading$: Observable<boolean> = this.state$.pipe(
    map((state) => {
      return state.isLoading;
    })
  );

  constructor(private http: HttpClient) {}

  private setState(callback: SetStateCallback): void {
    const currentState = this.subject.getValue();
    this.subject.next(callback(currentState));
  }

  private setRequestParams(params: RequestParams): void {
    const callback: SetStateCallback = (state) => {
      return { ...state, ...params };
    };
    this.setState(callback);
  }

  getMails(params: RequestParams): void {
    this.setRequestParams(params);

    const { folder, searchText, skip, take, newestFirst } =
      this.subject.getValue();

    this.http
      .get<MailList>(
        `${E.BASE_API}Folders/${folder}/emails?searchText=${searchText}&skip=${skip}&take=${take}&newestFirst=${newestFirst}`,
        { observe: 'events' }
      )
      .pipe(
        tap((event) => {
          if (event.type === HttpEventType.Sent) {
            const callback: SetStateCallback = (state) => {
              return { ...state, isLoading: true };
            };
            this.setState(callback);
          }
        }),
        delay(1000),
        tap((event) => {
          if (event.type === HttpEventType.Response) {
            const callback: SetStateCallback = (state) => {
              return { ...state, isLoading: false };
            };
            this.setState(callback);
          }
        })
      )
      .subscribe(
        (response: HttpEvent<MailList>) => {
          if (response.type === HttpEventType.Response) {
            const callback: SetStateCallback = (state) => {
              if (response.body) {
                return { ...state, mailList: response.body };
              }
              return state;
            };
            this.setState(callback);
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('http request: GET is complete');
        }
      );
  }
}
