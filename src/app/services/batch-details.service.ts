import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BatchDetailsService {
  constructor(private apiService: ApiService) { }

  getBatchDetail(id: string) {
    return this.apiService.get(`batch-rows/5f3400476003ee177cc9e7fc`)
    
    //return this.apiService.get(`batch-rows/${id}`)
    //return of(BatchDetails.find(batchDetail => batchDetail.id === id));
  }
}
