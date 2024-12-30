import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirConsComponent } from './voir-cons.component';

describe('VoirConsComponent', () => {
  let component: VoirConsComponent;
  let fixture: ComponentFixture<VoirConsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoirConsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
