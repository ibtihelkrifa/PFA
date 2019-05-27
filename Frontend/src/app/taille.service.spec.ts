import { TestBed, inject } from '@angular/core/testing';

import { TailleService } from './taille.service';

describe('TailleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TailleService]
    });
  });

  it('should be created', inject([TailleService], (service: TailleService) => {
    expect(service).toBeTruthy();
  }));
});
