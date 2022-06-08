import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "../services/cookie.service";
import {Router} from "@angular/router";
import {Emitters} from "../services/emitters";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  readonly API: string = 'http://127.0.0.1:5000';

  events: [{
    id: number,
    name: string,
    description: string,
    location: string,
    date: string,
    image: string
  }] = [] as any;

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private router: Router
  ) {
  }


  ngOnInit(): void {
    this.http.get<[{
      id: number,
      name: string,
      description: string,
      location: string,
      date: string,
      image: string
    }]>
    (this.API + "/event").subscribe({
      next: (data) => {
        data.forEach((event) => {
          this.events.push(event);
        })
      }
    })
    this.checkAuth()
  }

  checkAuth() {
    if (this.cookie.getAuthToken()) {
      Emitters.authEmitter.emit(true);
    } else {
      Emitters.authEmitter.emit(false);
    }
  }

  relocateToTicket(event: {}): void {
    if (!this.cookie.getAuthToken()) {
      alert("You should be logged")
      return
    }
    this.router.navigate(['/tickets'], {state: event})
  }


}
