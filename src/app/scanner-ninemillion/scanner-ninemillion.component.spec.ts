import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerNinemillionComponent } from './scanner-ninemillion.component';

describe('ScannerNinemillionComponent', () => {
  let component: ScannerNinemillionComponent;
  let fixture: ComponentFixture<ScannerNinemillionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScannerNinemillionComponent]
    });
    fixture = TestBed.createComponent(ScannerNinemillionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
