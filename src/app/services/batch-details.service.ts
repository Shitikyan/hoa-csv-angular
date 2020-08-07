import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatchDetailsService {

  constructor() { }
  
  getBatch(id: number): Observable<Batch> {
    return of(Batches.find(batch => batch.id === id));
  }
}
