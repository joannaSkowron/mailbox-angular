import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Mail, RequestParams } from '../../mail.model';
import { MailListService } from '../../services/mail-list.service';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MailListComponent implements OnInit, OnDestroy {
  private paramsSubscription!: Subscription;
  mails$: Observable<Mail[]> = this.mailListService.mails$;
  isLoading$: Observable<boolean> = this.mailListService.isLoading$;

  constructor(
    private mailListService: MailListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      const requestParams: RequestParams = {
        folder: params['folder'],
        skip: 0,
        take: 20,
        newestFirst: true,
      };
      this.mailListService.getMails(requestParams);
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
