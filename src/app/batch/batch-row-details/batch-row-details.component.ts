import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BatchDetailsService } from 'src/app/services/batch-details.service';
import { BatchDetail } from 'src/app/interfaces/batchDetail';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Batch } from 'src/app/interfaces/batch';
import { BatchService } from 'src/app/services/batch.service';

@Component({
  selector: 'app-batch-row-details',
  templateUrl: './batch-row-details.component.html',
  styleUrls: ['./batch-row-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BatchRowDetailsComponent implements OnInit {
  batchName: string = 'testBatch';
  totalRecords: number = 0;
  status: string = '409 Pending';
  batchRow: BatchDetail = {} as BatchDetail;
  batch: Batch;

  constructor(private location: Location, private batchDetailsService: BatchDetailsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBatchDetail();
  }

  getBatchDetail(): void {
    this.route.paramMap.subscribe((params) => {
      this.batchDetailsService
        .getBatchrowDetail(params.get('id'))
        .subscribe((res) => { this.batchRow = res });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
