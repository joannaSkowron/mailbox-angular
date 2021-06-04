import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

interface NavItem {
  name: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  readonly navData: NavItem[] = [
    {
      name: 'Mail',
      path: '/mail',
      icon: '',
    },
    {
      name: 'Calendar',
      path: '/calendar',
      icon: '',
    },
    {
      name: 'AddressBook',
      path: '/addressbook',
      icon: '',
    },
  ];
}
