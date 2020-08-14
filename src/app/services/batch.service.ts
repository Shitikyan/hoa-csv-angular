import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  constructor(private apiService: ApiService) { }

  getBatches() {
    return this.apiService.get('batches')
  }

  getBatch(id: string) {
    return this.apiService.get(`batches/${id}`)
  }

  getBatchrows(id: string) {
    return this.apiService.get(`batches/${id}/batch-rows`)
  }

  getFirstBatchrow(id: string) {
    return this.apiService.get(`batches/${id}/batch-row-first`)
  }
}
