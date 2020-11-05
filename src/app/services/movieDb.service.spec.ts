/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieDbService } from './movieDb.service';

describe('Service: MovieDb', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDbService]
    });
  });

  it('should ...', inject([MovieDbService], (service: MovieDbService) => {
    expect(service).toBeTruthy();
  }));
});
