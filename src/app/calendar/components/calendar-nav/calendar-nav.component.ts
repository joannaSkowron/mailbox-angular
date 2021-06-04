import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-calendar-nav',
  templateUrl: './calendar-nav.component.html',
  styleUrls: ['./calendar-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
