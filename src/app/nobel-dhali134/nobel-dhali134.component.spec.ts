import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobelDhali134Component } from './nobel-dhali134.component';

describe('NobelDhali134Component', () => {
  let component: NobelDhali134Component;
  let fixture: ComponentFixture<NobelDhali134Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NobelDhali134Component]
    });
    fixture = TestBed.createComponent(NobelDhali134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
