import { TestBed } from '@angular/core/testing';

import { QuoteslistService } from './quoteslist.service';

describe('QuoteslistService', () => {
  let service: QuoteslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
