import { TestBed } from '@angular/core/testing';

import { FtypeInfoService } from './ftype-info.service';

describe('FtypeInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FtypeInfoService = TestBed.get(FtypeInfoService);
    expect(service).toBeTruthy();
  });
});
