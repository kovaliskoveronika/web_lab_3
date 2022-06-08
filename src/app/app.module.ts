import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { LoginPageComponent } from './login-page/login-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RegPageComponent } from './reg-page/reg-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TicketsPageComponent } from './tickets-page/tickets-page.component';
import { MyTicketPageComponent } from './my-ticket-page/my-ticket-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent,
    RegPageComponent,
    UserPageComponent,
    MainPageComponent,
    TicketsPageComponent,
    MyTicketPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
