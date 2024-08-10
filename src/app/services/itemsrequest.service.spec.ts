import { TestBed } from '@angular/core/testing';

import { ItemsrequestService } from './itemsrequest.service';

describe('ItemsrequestService', () => {
  let service: ItemsrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
