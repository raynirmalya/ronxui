import { TestBed, inject } from '@angular/core/testing';

import { AccordionService } from './accordion.service';

describe('AccordionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccordionService],
    });
  });

  it('should be created', inject(
    [AccordionService],
    (service: AccordionService) => {
      expect(service).toBeTruthy();
    }
  ));
});
