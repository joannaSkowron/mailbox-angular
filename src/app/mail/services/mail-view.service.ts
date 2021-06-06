import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { Mail, MailViewState, PostMail } from '../mail.model';
import { environment as E } from '../../../environments/environment';

type SetStateCallback = (state: MailViewState) => MailViewState;

const initialState: MailViewState = {
  mail: null,
  isLoading: false,
};

@Injectable({
  providedIn: 'root',
})
export class MailViewService {
  private readonly subject: BehaviorSubject<MailViewState> =
    new BehaviorSubject(initialState);
  public readonly state$: Observable<MailViewState> =
    this.subject.asObservable();
  public readonly mail$: Observable<Mail | null> = this.state$.pipe(
    map((state) => {
      return state.mail;
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

  getMail(id: number): void {
    this.http
      .get<Mail>(`${E.BASE_API}Emails/${id}`, { observe: 'events' })
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
        (response: HttpEvent<Mail>) => {
          if (response.type === HttpEventType.Response) {
            const callback: SetStateCallback = (state) => {
              if (response.body) {
                return { ...state, mail: response.body };
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

  postMail(body: PostMail, asDraft: boolean): Observable<PostMail> {
    return this.http
      .post<PostMail>(
        `${E.BASE_API}Emails/${asDraft ? 'draft' : 'send'}`,
        body
      )
  }
}
