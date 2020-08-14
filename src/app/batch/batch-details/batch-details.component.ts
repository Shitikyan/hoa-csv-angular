import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BatchService } from '../../services/batch.service';
import { BatchDetail } from 'src/app/interfaces/batchDetail';
import { Batch } from 'src/app/interfaces/batch';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BatchDetailsComponent implements OnInit {
  cols: any[];
  batchRows: BatchDetail[] = [];
  batch: Batch = {} as Batch;

  constructor(
    private route: ActivatedRoute,
    private batchService: BatchService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBatch();
    this.getBatchrows();

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'CurrentOwner', header: 'Title' },
      { field: 'PropertyFullStreetAddress', header: 'Detail' },
      { field: 'Referral_Date', header: 'Date' },
      { field: 'PropertyCity', header: 'Adress1' },
      { field: 'HOA_Indicator', header: 'HOA' },
    ];
  }

  getBatchrows(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.batchService.getBatchrows(id).subscribe((batchRows) => {
      this.batchRows = batchRows.sort(({ pending }) => {
        if (pending) return -1;
        return 1;
      });
    });
  }

  getBatch(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.batchService.getBatch(id).subscribe((res) => (this.batch = res));
  }

  goBack(): void {
    this.location.back();
  }
}
