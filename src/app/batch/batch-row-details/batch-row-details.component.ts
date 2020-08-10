import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
  id: number;

  constructor(private location: Location, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
  }

  goBack(): void {
    this.location.back();
  }
}
