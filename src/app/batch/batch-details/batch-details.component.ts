import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Batch } from '../../interfaces/batch';

import { BatchService } from '../../services/batch.service';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BatchDetailsComponent implements OnInit {
  cols: any[];
  batchRows: Batch[] = [];
  batchName: string = "testBatch";
  totalRecords: number = 0;
  status: string = "409 Pending";

  constructor(
    private route: ActivatedRoute,
    private batchService: BatchService,
    private location: Location) { }

  ngOnInit(): void {
    this.getBatch();
    this.totalRecords = this.batchRows.length;
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'title', header: 'Title' },
      { field: 'detail', header: 'Detail' },
      { field: 'date', header: 'Date' },
      { field: 'instrument', header: 'Adress1' },
      { field: 'hoa', header: 'HOA' }
    ];
  }

  getBatch(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.batchService.getBatch(id)
      .subscribe(batch => this.batchRows.push(batch));
  }

  goBack(): void {
    this.location.back();
  }
}
