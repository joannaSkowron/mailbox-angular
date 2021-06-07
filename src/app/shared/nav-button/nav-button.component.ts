import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavButtonComponent {
  @Input() link!: string;
  @Input() iconClass!: string;
  @Input() caption!: string;

  constructor() { }


}
