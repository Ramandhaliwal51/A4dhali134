import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDhali134Component } from './header-dhali134.component';

describe('HeaderDhali134Component', () => {
  let component: HeaderDhali134Component;
  let fixture: ComponentFixture<HeaderDhali134Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderDhali134Component]
    });
    fixture = TestBed.createComponent(HeaderDhali134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
