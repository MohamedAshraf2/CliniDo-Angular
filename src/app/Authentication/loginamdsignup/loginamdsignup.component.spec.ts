import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginamdsignupComponent } from './loginamdsignup.component';

describe('LoginamdsignupComponent', () => {
  let component: LoginamdsignupComponent;
  let fixture: ComponentFixture<LoginamdsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginamdsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginamdsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
