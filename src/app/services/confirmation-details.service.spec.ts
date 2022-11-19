import { TestBed } from '@angular/core/testing';

import { ConfirmationDetailsService } from './confirmation-details.service';

describe('ConfirmationDetailsService', () => {
  let service: ConfirmationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
