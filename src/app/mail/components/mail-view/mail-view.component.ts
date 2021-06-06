import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Mail } from '../../mail.model';
import { MailViewService } from '../../services/mail-view.service';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MailViewComponent implements OnInit, OnDestroy {
  private paramsSubscription!: Subscription;
  mail$: Observable<Mail | null> = this.mailViewService.mail$;
  isLoading$: Observable<boolean> = this.mailViewService.isLoading$;

  constructor(
    private mailViewService: MailViewService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.mailViewService.getMail(params['id']);
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  getToAddresses(mail: Mail): string {
    const addresses = mail.to.map((item) => item.address);
    return addresses.join(', ');
  }

  getCCAddresses(mail: Mail): string {
    const addresses = mail.cc.map((item) => item.address);
    return addresses.join(', ');
  }
}
