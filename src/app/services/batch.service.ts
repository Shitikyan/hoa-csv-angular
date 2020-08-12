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
    //return of(Batches);
  }

  getBatch(id: string) {
    return this.apiService.get('batches', new HttpParams().set('id', id))
    //return of(BatchDetails.filter(batchRow => batchRow.batchId === id));
  }

}
