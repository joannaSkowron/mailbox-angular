import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() type!: 'text' | 'number';
  @Input() id!: string;
  @Input() placeholder!: string;
  @Output() onChange = new EventEmitter<string>();

  handleChange(value: string): void {
    this.onChange.emit(value);
  }
}
