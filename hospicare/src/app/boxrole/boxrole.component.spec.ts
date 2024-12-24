import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxroleComponent } from './boxrole.component';

describe('BoxroleComponent', () => {
  let component: BoxroleComponent;
  let fixture: ComponentFixture<BoxroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxroleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
