import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPreviewComponent } from './account-preview.component';

describe('AccountPreviewComponent', () => {
  let component: AccountPreviewComponent;
  let fixture: ComponentFixture<AccountPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
