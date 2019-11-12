import { TestBed } from '@angular/core/testing';

import { ZeroService } from './zero.service';

describe('ZeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZeroService = TestBed.get(ZeroService);
    expect(service).toBeTruthy();
  });
});
