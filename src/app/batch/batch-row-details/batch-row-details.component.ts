import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-batch-row-details',
  templateUrl: './batch-row-details.component.html',
  styleUrls: ['./batch-row-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BatchRowDetailsComponent implements OnInit {
  batchName: string = "testBatch";
  totalRecords: number = 0;
  status: string = "409 Pending";

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
}
