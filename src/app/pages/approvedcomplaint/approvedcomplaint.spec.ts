import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Approvedcomplaint } from './approvedcomplaint';

describe('Approvedcomplaint', () => {
  let component: Approvedcomplaint;
  let fixture: ComponentFixture<Approvedcomplaint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Approvedcomplaint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Approvedcomplaint);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
