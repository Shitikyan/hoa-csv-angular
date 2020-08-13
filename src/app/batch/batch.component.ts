import { BatchService } from '../services/batch.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Batch } from '../interfaces/batch';
import { BatchDetail } from '../interfaces/batchDetail';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BatchComponent implements OnInit {
  cols: any[];
  batches: Batch[];
  batchRow: BatchDetail = {} as BatchDetail;
  selectedId: number;

  constructor(private batchService: BatchService,
    private router: Router) { }

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

  work(id: string) {
    this.getBatchFirstBatchrow(id)
      .subscribe(firstRow => {
        if (!firstRow) {
          //Notify User
          return;
        }
        this.batchRow = firstRow;
        this.router.navigate(['batch/details/', this.batchRow.id]);
      });
  }

  getBatchFirstBatchrow(id: string): Observable<any> {
    return this.batchService.getFirstBatchrow(id);
  }
}
