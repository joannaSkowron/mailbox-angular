import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SafeHtmlPipe } from './safe-html.pipe';

import { RouterOutletComponent } from './router-outlet/router-outlet.component';
import { ListItemTileComponent } from './list-item-tile/list-item-tile.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { InputComponent } from './forms/input/input.component';
import { ButtonComponent } from './button/button.component';
import { NavButtonComponent } from './nav-button/nav-button.component';



@NgModule({
  declarations: [
    ListItemTileComponent,
    RouterOutletComponent,
    SpinnerComponent,
    SafeHtmlPipe,
    InputComponent,
    ButtonComponent,
    NavButtonComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ListItemTileComponent,
    RouterOutletComponent,
    SpinnerComponent,
    SafeHtmlPipe,
    InputComponent,
    ButtonComponent,
    NavButtonComponent,
  ],
})
export class SharedModule {}
