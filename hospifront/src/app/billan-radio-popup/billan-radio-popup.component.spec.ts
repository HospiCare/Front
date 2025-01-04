import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillanRadioPopupComponent } from './billan-radio-popup.component';

describe('BillanRadioPopupComponent', () => {
  let component: BillanRadioPopupComponent;
  let fixture: ComponentFixture<BillanRadioPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillanRadioPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillanRadioPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
