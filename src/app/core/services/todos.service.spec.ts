/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodosProviderService } from './todos-provider.service';

describe('Service: TodosProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosProviderService]
    });
  });

  it('should ...', inject([TodosProviderService], (service: TodosProviderService) => {
    expect(service).toBeTruthy();
  }));
});
