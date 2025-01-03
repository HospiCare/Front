import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioDashboardComponent } from './radio-dash.component';

describe('RadioDashComponent', () => {
  let component: RadioDashboardComponent;
  let fixture: ComponentFixture<RadioDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
