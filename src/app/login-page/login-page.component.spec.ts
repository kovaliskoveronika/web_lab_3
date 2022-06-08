import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {of} from "rxjs";

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule , HttpClientTestingModule, RouterTestingModule],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function updateForm() {
    component.form.controls['email'].setValue('test@gmail.com');
    component.form.controls['password'].setValue('test124');
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', () => {
    // @ts-ignore
    const authSpy = spyOn(component.auth, 'login');
    updateForm();

    // @ts-ignore
    authSpy.and.returnValue(of({
      'access_token': "123",
      user: {id: 1, username: 'test', email: "test", rating: 0, image: ""}
    }));

    component.submit();

    expect(authSpy).toHaveBeenCalledTimes(1);

  });

});
