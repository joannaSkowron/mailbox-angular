import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mail-list-item',
  templateUrl: './mail-list-item.component.html',
  styleUrls: ['./mail-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MailListItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
