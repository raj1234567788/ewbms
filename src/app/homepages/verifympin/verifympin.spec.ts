import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verifympin } from './verifympin';

describe('Verifympin', () => {
  let component: Verifympin;
  let fixture: ComponentFixture<Verifympin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Verifympin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Verifympin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
