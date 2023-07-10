import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionFormFieldComponent } from './promotion-form-field.component';

describe('PromotionFormFieldComponent', () => {
  let component: PromotionFormFieldComponent;
  let fixture: ComponentFixture<PromotionFormFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionFormFieldComponent]
    });
    fixture = TestBed.createComponent(PromotionFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
