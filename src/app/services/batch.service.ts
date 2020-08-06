import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Batch } from '../interfaces/batch';
import { Batches } from '../mock-data/mock-batches';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  getBatches(): Observable<Batch[]> {
    return of(Batches);
  }

  getBatch(id: number): Observable<Batch> {
    return of(Batches.find(batch => batch.id === id));
  }

  constructor() { }
}
