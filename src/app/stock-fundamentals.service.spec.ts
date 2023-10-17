import { TestBed } from '@angular/core/testing';

import { StockFundamentalsService } from './stock-fundamentals.service';

describe('StockFundamentalsService', () => {
  let service: StockFundamentalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockFundamentalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
