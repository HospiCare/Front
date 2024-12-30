import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdonnanceDetailsPopupComponent } from './ordonnance-details-popup.component';

describe('OrdonnanceDetailsPopupComponent', () => {
  let component: OrdonnanceDetailsPopupComponent;
  let fixture: ComponentFixture<OrdonnanceDetailsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdonnanceDetailsPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdonnanceDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
