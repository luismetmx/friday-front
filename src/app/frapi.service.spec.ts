import { TestBed } from '@angular/core/testing';

import { FrapiService } from './frapi.service';

describe('FrapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrapiService = TestBed.get(FrapiService);
    expect(service).toBeTruthy();
  });
});
