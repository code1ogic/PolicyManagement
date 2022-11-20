import { TestBed } from '@angular/core/testing';

import { SearchpolicyService } from './searchpolicy.service';

describe('SearchpolicyService', () => {
  let service: SearchpolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchpolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
