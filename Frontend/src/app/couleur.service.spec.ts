import { TestBed, inject } from '@angular/core/testing';

import { CouleurService } from './couleur.service';

describe('CouleurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CouleurService]
    });
  });

  it('should be created', inject([CouleurService], (service: CouleurService) => {
    expect(service).toBeTruthy();
  }));
});
