import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BatchComponent implements OnInit {
  cols: any[];
  batches: any[];

  constructor() { }

  ngOnInit(): void {
    this.batches = [
      { title: 'John', detail: 'Lennon', date: '04/10/1940', instrument: 'Guitar', count: '72' },
      { title: 'Paul', detail: 'McCartney', date: '18/06/1942', instrument: 'Bass', count: '70' },
      { title: 'George', detail: 'Harrison', date: '25/02/1943', instrument: 'Guitar', count: '22' },
      { title: 'Ringo', detail: 'Starr', date: '07/07/1940', instrument: 'Drums', count: '2' }
    ];
    this.cols = [
      { field: 'title', header: 'Title' },
      { field: 'detail', header: 'Detail' },
      { field: 'date', header: 'Date' },
      { field: 'instrument', header: 'Instrument' },
      { field: 'count', header: 'Count' }
  ];
  }
}
