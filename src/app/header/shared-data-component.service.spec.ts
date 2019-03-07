import { TestBed } from '@angular/core/testing';

import { SharedDataComponentService } from './shared-data-component.service';

describe('SharedDataComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedDataComponentService = TestBed.get(SharedDataComponentService);
    expect(service).toBeTruthy();
  });
});
