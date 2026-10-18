import { TestBed } from '@angular/core/testing';

import { AppToaster } from './app-toaster';

describe('AppToaster', () => {
  let service: AppToaster;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppToaster);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
