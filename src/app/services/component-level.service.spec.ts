import { TestBed } from '@angular/core/testing';

import { ComponentLevelService } from './component-level.service';

describe('ComponentLevelService', () => {
  let service: ComponentLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
