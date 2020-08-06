import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BatchService } from '../services/batch.service';
import { Batch } from '../interfaces/batch';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BatchComponent implements OnInit {
  cols: any[];
  batches: Batch[];
  selectedId: number;

  constructor(private batchService: BatchService) { }

  ngOnInit(): void {
    this.getBatches();
    this.cols = [
      { field: 'title', header: 'Client' },
      { field: 'detail', header: '# of orders' },
      { field: 'date', header: 'Date' },
      { field: 'instrument', header: 'Status' },
      { field: 'hoa', header: 'Pending' }
    ];
  }
  getBatches(): void {
    this.batchService.getBatches()
      .subscribe(batches => this.batches = batches);
  }
}
