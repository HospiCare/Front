import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanChangePopupComponent } from './bilan-change-popup.component';

describe('BilanChangePopupComponent', () => {
  let component: BilanChangePopupComponent;
  let fixture: ComponentFixture<BilanChangePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BilanChangePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilanChangePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
