import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-router-outlet',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./router-outlet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouterOutletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
