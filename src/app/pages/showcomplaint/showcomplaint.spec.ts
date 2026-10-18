import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showcomplaint } from './showcomplaint';

describe('Showcomplaint', () => {
  let component: Showcomplaint;
  let fixture: ComponentFixture<Showcomplaint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Showcomplaint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Showcomplaint);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
