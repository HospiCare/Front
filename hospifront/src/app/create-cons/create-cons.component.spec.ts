import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConsComponent } from './create-cons.component';

describe('CreateConsComponent', () => {
  let component: CreateConsComponent;
  let fixture: ComponentFixture<CreateConsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateConsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
