import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Mail } from '../../mail.model';

@Component({
  selector: 'app-mail-list-item',
  templateUrl: './mail-list-item.component.html',
  styleUrls: ['./mail-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MailListItemComponent {
  @Input() mail!: Mail;

  constructor() {}

  extractContent(html: string) {
    return new DOMParser().parseFromString(html, 'text/html').documentElement.textContent;
  }
}
