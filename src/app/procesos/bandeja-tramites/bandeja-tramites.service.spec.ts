import { TestBed } from '@angular/core/testing';

import { BandejaTramitesService } from './bandeja-tramites.service';

describe('BandejaTramitesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BandejaTramitesService = TestBed.get(BandejaTramitesService);
    expect(service).toBeTruthy();
  });
});
