import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-border',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.scss']
})
export class BorderComponent implements OnInit {
  @Input() className: string;
  classes: string;

  constructor() { }

  ngOnInit(): void {
    this.classes = 'border rounded mr-3 ' + this.className;
  }
}
