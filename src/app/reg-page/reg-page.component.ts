import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthorizationService} from "../services/authorization.service";

@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.scss']
})
export class RegPageComponent implements OnInit {
  form: FormGroup = {} as FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth: AuthorizationService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nickname: '',
      name: '',
      surname: '',
      email: '',
      password: ''
    })
  }

  submit(): void{
    if(!this.validate(this.form.getRawValue())){
      return;
    }
    this.auth.registration(this.form.getRawValue()).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: err => {
        if(err.status === 403){
          alert('Wrong Data');
        }
      }
    })
  }

  validate(user: { nickname: string, name: string, surname: string, email: string, password: string }) {
    const validateEmail = (email: string) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    let status = true

    if (!validateEmail(user.email)) {
      alert('Incorrect email');
      status = false;
    }

    if (user.nickname === '') {
      alert('Incorrect nickname')
      status = false;
    }

    if (user.name === '') {
      alert('Write your name');
      status = false;
    }

    if (user.surname === '') {
      alert('Write your surname');
      status = false;
    }

    if(user.password.length <= 6){
      alert('Password is too small')
      status = false;
    }

    return status;
  }

}
