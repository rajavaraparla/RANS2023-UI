import { TestBed } from '@angular/core/testing';

import { LoadEarningsFileQService } from './load-earnings-file-q.service';

describe('LoadEarningsFileQService', () => {
  let service: LoadEarningsFileQService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadEarningsFileQService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
