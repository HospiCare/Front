import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinWindowComponent } from './soin-window.component';

describe('SoinWindowComponent', () => {
  let component: SoinWindowComponent;
  let fixture: ComponentFixture<SoinWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoinWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoinWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
