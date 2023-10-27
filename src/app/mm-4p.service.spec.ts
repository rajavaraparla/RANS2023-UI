import { TestBed } from '@angular/core/testing';

import { Mm4pService } from './mm-4p.service';

describe('Mm4pService', () => {
  let service: Mm4pService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mm4pService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
