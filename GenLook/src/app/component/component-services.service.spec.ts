import { TestBed } from '@angular/core/testing';

import { ComponentServicesService } from './component-services.service';

describe('ComponentServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentServicesService = TestBed.get(ComponentServicesService);
    expect(service).toBeTruthy();
  });
});
