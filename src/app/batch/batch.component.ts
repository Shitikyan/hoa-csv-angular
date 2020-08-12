import { BatchService } from '../services/batch.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
      { field: 'id', header: 'Id' },
      { field: 'client', header: '# of orders' },
      { field: 'date', header: 'Date' },
      { field: 'status', header: 'Status' },
      { field: 'hoa', header: 'HOA' }
    ];
  }

  getBatches(): void {
    this.batchService.getBatches()
      .subscribe(batches => this.batches = batches);
  }
}
