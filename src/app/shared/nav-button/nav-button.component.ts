import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
