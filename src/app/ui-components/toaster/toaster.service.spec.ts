import { TestBed } from '@angular/core/testing';

import { JarvisToasterService } from './toaster.service';

describe('JarvisToasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JarvisToasterService = TestBed.get(JarvisToasterService);
    expect(service).toBeTruthy();
  });
});
