import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

interface NavData {
  name: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-mail-nav',
  templateUrl: './mail-nav.component.html',
  styleUrls: ['./mail-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MailNavComponent {
  readonly navData: NavData[] = [
    {
      name: 'Inbox',
      path: '/mail/inbox',
      icon: '',
    },
    {
      name: 'Sent',
      path: '/mail/outbox',
      icon: '',
    },
    {
      name: 'Drafts',
      path: '/mail/draft',
      icon: '',
    },
    {
      name: 'Trash',
      path: '/mail/trash',
      icon: '',
    },
    {
      name: 'Spam',
      path: '/mail/spam',
      icon: '',
    },
  ];
}
