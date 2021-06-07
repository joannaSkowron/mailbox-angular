import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-nav-list-item',
  templateUrl: './nav-list-item.component.html',
  styleUrls: ['./nav-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavListItemComponent {
  @Input() item!: {
    name: string;
    path: string;
    icon: string;
  };
}
