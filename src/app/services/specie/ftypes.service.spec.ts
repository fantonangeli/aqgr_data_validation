import { TestBed } from '@angular/core/testing';

import { FtypesService } from './ftypes.service';

describe('FtypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FtypesService = TestBed.get(FtypesService);
    expect(service).toBeTruthy();
  });
});
