import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SafeHtmlPipe } from './safe-html.pipe';

import { RouterOutletComponent } from './router-outlet/router-outlet.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { InputComponent } from './forms/input/input.component';
import { ButtonComponent } from './button/button.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { NavListItemComponent } from './nav-list-item/nav-list-item.component';

@NgModule({
  declarations: [
    RouterOutletComponent,
    SpinnerComponent,
    SafeHtmlPipe,
    InputComponent,
    ButtonComponent,
    NavButtonComponent,
    NavListItemComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    RouterOutletComponent,
    SpinnerComponent,
    SafeHtmlPipe,
    InputComponent,
    ButtonComponent,
    NavButtonComponent,
    NavListItemComponent,
  ],
})
export class SharedModule {}
