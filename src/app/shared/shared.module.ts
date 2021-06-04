import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemTileComponent } from './list-item-tile/list-item-tile.component';



@NgModule({
  declarations: [
    ListItemTileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListItemTileComponent,
  ]
})
export class SharedModule { }
