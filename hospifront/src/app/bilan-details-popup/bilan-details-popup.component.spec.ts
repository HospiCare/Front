import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanDetailsPopupComponent } from './bilan-details-popup.component';

describe('BilanDetailsPopupComponent', () => {
  let component: BilanDetailsPopupComponent;
  let fixture: ComponentFixture<BilanDetailsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BilanDetailsPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilanDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
