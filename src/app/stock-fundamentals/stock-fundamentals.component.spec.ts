import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockFundamentalsComponent } from './stock-fundamentals.component';

describe('StockFundamentalsComponent', () => {
  let component: StockFundamentalsComponent;
  let fixture: ComponentFixture<StockFundamentalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockFundamentalsComponent]
    });
    fixture = TestBed.createComponent(StockFundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
