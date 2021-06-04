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
      path: 'inbox',
      icon: '',
    },
    {
      name: 'Sent',
      path: 'sent',
      icon: '',
    },
    {
      name: 'Drafts',
      path: 'drafts',
      icon: '',
    },
    {
      name: 'Trash',
      path: 'trash',
      icon: '',
    },
    {
      name: 'Spam',
      path: 'spam',
      icon: '',
    },
  ];
}
