import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MailComposeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
