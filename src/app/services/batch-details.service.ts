import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BatchDetailsService {
  constructor(private apiService: ApiService) { }

  getBatchrowDetail(id: string) {
    return this.apiService.get(`batch-rows/${id}`);
  }

  getBatchrows() {
    return this.apiService.get('batch-rows');
  }
}
