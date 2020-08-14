import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() cols: any[] = [];
  @Input() values: any[] = [];
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() label: string;
  @Input() value: string;
  @Input() className: string;

  constructor() { }

  ngOnInit(): void {
  }

}
