import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDhali134Component } from './personal-dhali134.component';

describe('PersonalDhali134Component', () => {
  let component: PersonalDhali134Component;
  let fixture: ComponentFixture<PersonalDhali134Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalDhali134Component]
    });
    fixture = TestBed.createComponent(PersonalDhali134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
