import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MailListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
