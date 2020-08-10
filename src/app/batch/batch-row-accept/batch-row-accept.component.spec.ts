import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchRowAcceptComponent } from './batch-row-accept.component';

describe('BatchRowAcceptComponent', () => {
  let component: BatchRowAcceptComponent;
  let fixture: ComponentFixture<BatchRowAcceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchRowAcceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchRowAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
