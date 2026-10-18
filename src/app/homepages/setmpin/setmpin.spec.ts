import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Setmpin } from './setmpin';

describe('Setmpin', () => {
  let component: Setmpin;
  let fixture: ComponentFixture<Setmpin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Setmpin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Setmpin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
