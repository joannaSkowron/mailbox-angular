import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailComposeComponent } from './components/mail-compose/mail-compose.component';
import { MailListComponent } from './components/mail-list/mail-list.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailComponent } from './components/mail/mail.component';

const routes: Routes = [
  {
    path: '',
    component: MailComponent,
    children: [
      {
        path: '',
        redirectTo: 'inbox',
      },
      {
        path: 'compose',
        component: MailComposeComponent,
      },
      {
        path: 'view/:id',
        component: MailViewComponent,
      },
      {
        path: ':folder',
        component: MailListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailRoutingModule {}
