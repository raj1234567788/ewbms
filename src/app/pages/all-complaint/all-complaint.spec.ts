import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComplaint } from './all-complaint';

describe('AllComplaint', () => {
  let component: AllComplaint;
  let fixture: ComponentFixture<AllComplaint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllComplaint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllComplaint);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
