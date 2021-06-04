import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressbookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
