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
      icon: 'far fa-envelope-open',
    },
    {
      name: 'Sent',
      path: '/mail/outbox',
      icon: 'far fa-paper-plane',
    },
    {
      name: 'Drafts',
      path: '/mail/draft',
      icon: 'fas fa-pencil-ruler',
    },
    {
      name: 'Trash',
      path: '/mail/trash',
      icon: 'far fa-trash-alt',
    },
    {
      name: 'Spam',
      path: '/mail/spam',
      icon: 'fas fa-ban',
    },
  ];
}
