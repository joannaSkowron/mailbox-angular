import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-item-tile',
  templateUrl: './list-item-tile.component.html',
  styleUrls: ['./list-item-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemTileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
