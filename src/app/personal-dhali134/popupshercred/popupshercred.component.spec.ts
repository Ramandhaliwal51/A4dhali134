import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupshercredComponent } from './popupshercred.component';

describe('PopupshercredComponent', () => {
  let component: PopupshercredComponent;
  let fixture: ComponentFixture<PopupshercredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupshercredComponent]
    });
    fixture = TestBed.createComponent(PopupshercredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
