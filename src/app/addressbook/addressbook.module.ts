import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressbookRoutingModule } from './addressbook-routing.module';
import { AddressbookComponent } from './components/addressbook/addressbook.component';
import { AddressbookNavComponent } from './components/addressbook-nav/addressbook-nav.component';


@NgModule({
  declarations: [
    AddressbookComponent,
    AddressbookNavComponent
  ],
  imports: [
    CommonModule,
    AddressbookRoutingModule
  ]
})
export class AddressbookModule { }
