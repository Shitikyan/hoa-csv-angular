import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BatchDetail } from '../interfaces/batchDetail';
import { BatchDetails } from '../mock-data/mock-batch-details';

@Injectable({
  providedIn: 'root'
})
export class BatchDetailsService {

  constructor() { }
  
  getBatch(id: number): Observable<BatchDetail> {
    return of(BatchDetails);
  }
}
