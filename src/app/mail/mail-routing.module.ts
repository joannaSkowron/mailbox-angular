import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { RouterOutletComponent } from '../shared/router-outlet/router-outlet.component';
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
        pathMatch: 'full',
        redirectTo: 'inbox',
      },
      {
        path: 'compose',
        component: MailComposeComponent,
      },
      {
        path: ':folder',
        component: RouterOutletComponent,
        children: [
          {
            path: '',
            component: MailListComponent,
          },
          {
            path: ':id',
            component: MailViewComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailRoutingModule {}
