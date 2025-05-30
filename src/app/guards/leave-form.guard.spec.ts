import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { leaveFormGuard } from './leave-form.guard';

describe('leaveFormGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => leaveFormGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
