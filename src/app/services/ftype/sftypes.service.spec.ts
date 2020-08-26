import { TestBed } from '@angular/core/testing';

import { SFtypesService } from './sftypes.service';

describe('SFtypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SFtypesService = TestBed.get(SFtypesService);
    expect(service).toBeTruthy();
  });
});
