import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() type!: 'button' | 'submit';
  @Input() mode!: 'primary' | 'secondary';
  @Input() caption!: string;
  @Output() onClick = new EventEmitter();
  
  constructor() {}

  handleClick() :void{
    this.onClick.emit();
  }
}
