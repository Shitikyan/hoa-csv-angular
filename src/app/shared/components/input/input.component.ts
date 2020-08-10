import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  Optional,
  Self,
  ViewEncapsulation,
} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() disabled: boolean = false;
  @Input() ngModel: string;
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() label: string;
  @Input() value: string;
  @Output() ngModelChange = new EventEmitter<string>();

  uuid: string;

  constructor(
    @Self()
    @Optional()
    private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }

    this.uuid = uuidv4();
  }

  ngOnInit(): void {}

  writeValue(value: any): void {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private onChange() {}
  private onTouched() {}
}
