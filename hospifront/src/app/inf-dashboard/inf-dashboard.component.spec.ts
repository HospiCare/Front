import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfDashboardComponent } from './inf-dashboard.component';

describe('InfDashboardComponent', () => {
  let component: InfDashboardComponent;
  let fixture: ComponentFixture<InfDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
