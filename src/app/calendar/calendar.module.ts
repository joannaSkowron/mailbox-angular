import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarNavComponent } from './components/calendar-nav/calendar-nav.component';


@NgModule({
  declarations: [
    CalendarComponent,
    CalendarNavComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule
  ]
})
export class CalendarModule { }
