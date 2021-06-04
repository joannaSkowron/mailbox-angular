import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-addressbook-nav',
  templateUrl: './addressbook-nav.component.html',
  styleUrls: ['./addressbook-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressbookNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
