import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input-disabled',
  templateUrl: './input-disabled.component.html',
  styleUrls: ['./input-disabled.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputDisabledComponent implements OnInit {
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() label: string;
  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
