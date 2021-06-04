import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailRoutingModule } from './mail-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MailNavComponent } from './components/mail-nav/mail-nav.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailComposeComponent } from './components/mail-compose/mail-compose.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MailComponent } from './components/mail/mail.component';
import { MailListItemComponent } from './mail-list/mail-list-item/mail-list-item.component';


@NgModule({
  declarations: [
    MailNavComponent,
    MailListComponent,
    MailViewComponent,
    MailComposeComponent,
    MailComponent,
    MailListItemComponent
  ],
  imports: [
    CommonModule,
    MailRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MailModule { }