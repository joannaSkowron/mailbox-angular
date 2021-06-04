import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MailViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
