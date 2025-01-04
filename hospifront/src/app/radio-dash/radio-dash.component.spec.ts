import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioDashComponent } from './radio-dash.component';

describe('RadioDashComponent', () => {
  let component: RadioDashComponent;
  let fixture: ComponentFixture<RadioDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
