import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchRowDetailsComponent } from './batch-row-details.component';

describe('BatchRowDetailsComponent', () => {
  let component: BatchRowDetailsComponent;
  let fixture: ComponentFixture<BatchRowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BatchRowDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchRowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
