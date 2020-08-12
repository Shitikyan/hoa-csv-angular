import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BatchService } from '../../services/batch.service';
import { BatchDetail } from 'src/app/interfaces/batchDetail';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BatchDetailsComponent implements OnInit {
  cols: any[];
  batchRows: BatchDetail[] = [];
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
      { field: 'CurrentOwner', header: 'Title' },
      { field: 'PropertyFullStreetAddress', header: 'Detail' },
      { field: 'Referral_Date', header: 'Date' },
      { field: 'PropertyCity', header: 'Adress1' },
      { field: 'HOA_Indicator', header: 'HOA' }
    ];
  }

  getBatch(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.batchService.getBatch(id)
      .subscribe(batchRows => this.batchRows = batchRows);
  }

  goBack(): void {
    this.location.back();
  }
}
