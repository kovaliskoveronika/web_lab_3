import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegPageComponent} from "./reg-page/reg-page.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {TicketsPageComponent} from "./tickets-page/tickets-page.component";
import {MyTicketPageComponent} from "./my-ticket-page/my-ticket-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'reg', component: RegPageComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'tickets', component: TicketsPageComponent},
  {path: 'my_tickets', component: MyTicketPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
