import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPageComponent } from './reg-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {of} from "rxjs";

describe('RegPageComponent', () => {
  let component: RegPageComponent;
  let fixture: ComponentFixture<RegPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule , HttpClientTestingModule, RouterTestingModule],
      declarations: [ RegPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', () => {
    // @ts-ignore
    const authSpy = spyOn(component.auth, 'registration');
    component.form.get("surname")?.setValue("test124");
    component.form.get("email")?.setValue("test@gmail.com");
    component.form.get("name")?.setValue("test124");
    component.form.get("nickname")?.setValue("test");
    component.form.get("password")?.setValue("test1234");

    // @ts-ignore
    authSpy.and.returnValue(of({
      'access_token': "123",
      user: {surname: 'test124', email: "test@gmail.com", name: 'test124', nickname: 'test', password: 'test1234'}
    }));

    component.submit();

    expect(authSpy).toHaveBeenCalledTimes(1);

  });

  it('should check validation', () => {
    // @ts-ignore
    const authSpy = spyOn(component.auth, 'registration');
    component.form.get("surname")?.setValue("");
    component.form.get("email")?.setValue("");
    component.form.get("name")?.setValue("");
    component.form.get("nickname")?.setValue("");
    component.form.get("password")?.setValue("");

    component.submit();

    expect(component.validate({surname: '', email: "", name: '', nickname: '', password: ''})).toBeFalsy();
  });


});
