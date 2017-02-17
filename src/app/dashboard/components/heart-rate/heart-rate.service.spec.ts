/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeartRateService } from './heart-rate.service';

describe('HeartRateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeartRateService]
    });
  });

  it('should ...', inject([HeartRateService], (service: HeartRateService) => {
    expect(service).toBeTruthy();
  }));
});
