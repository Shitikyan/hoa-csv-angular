import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BatchDetailsService } from 'src/app/services/batch-details.service';
import { BatchDetail } from 'src/app/interfaces/batchDetail';
import { Location } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-batch-row-accept',
  templateUrl: './batch-row-accept.component.html',
  styleUrls: ['./batch-row-accept.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BatchRowAcceptComponent implements OnInit {
  batchDetail: BatchDetail | null = null;

  constructor(
    private location: Location,
    private batchDetailsService: BatchDetailsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.batchDetailsService
        .getBatch(Number(params.get('id')))
        .subscribe((res) => (this.batchDetail = res));
    });
  }

  get AddressInfo() {
    return `${this.batchDetail.streetAddress} ${this.batchDetail.city} ${this.batchDetail.state} ${this.batchDetail.zip}`;
  }

  formatDate(date: Date) {
    return moment(date).format('MMM Do YYYY');
  }

  goBack(): void {
    this.location.back();
  }
}
