import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerMagnaComponent } from './scanner-magna.component';

describe('ScannerMagnaComponent', () => {
  let component: ScannerMagnaComponent;
  let fixture: ComponentFixture<ScannerMagnaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScannerMagnaComponent]
    });
    fixture = TestBed.createComponent(ScannerMagnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
