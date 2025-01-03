import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanRadioComponent } from './bilan-radio.component';

describe('BilanRadioComponent', () => {
  let component: BilanRadioComponent;
  let fixture: ComponentFixture<BilanRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BilanRadioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilanRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
