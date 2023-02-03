import { TestBed } from '@angular/core/testing';

import { ManageLocalDataService } from './manage-local-data.service';

describe('ManageLocalDataService', () => {
  let service: ManageLocalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageLocalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
