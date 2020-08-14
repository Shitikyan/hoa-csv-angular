import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BatchDetail } from '../interfaces/batchDetail';

@Injectable({
  providedIn: 'root',
})
export class BatchDetailsService {
  constructor(private apiService: ApiService) {}

  getBatchrowDetail(id: string) {
    return this.apiService.get(`batch-rows/${id}`);
  }

  getBatchrows() {
    return this.apiService.get('batch-rows');
  }

  acceptBatchrow(batchRow: BatchDetail) {
    return this.apiService.put(`batch-rows/${batchRow.id}/accept`, batchRow);
  }
}
