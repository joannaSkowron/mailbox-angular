import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'mail', pathMatch: 'full'},
  {
    path: 'mail',
    loadChildren: () =>
      import('./mail/mail.module').then((m) => m.MailModule),
  },
  {
    path: 'calendar', 
    loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule),
  },
  {
    path: 'addressbook',
    loadChildren: () => import('./addressbook/addressbook.module').then(m => m.AddressbookModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
