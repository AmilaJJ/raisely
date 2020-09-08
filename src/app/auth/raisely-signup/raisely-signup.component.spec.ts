import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiselySignupComponent } from './raisely-signup.component';

describe('RaiselySignupComponent', () => {
  let component: RaiselySignupComponent;
  let fixture: ComponentFixture<RaiselySignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiselySignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiselySignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
