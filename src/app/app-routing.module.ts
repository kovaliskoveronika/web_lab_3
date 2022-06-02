import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegPageComponent} from "./reg-page/reg-page.component";
import {UserPageComponent} from "./user-page/user-page.component";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'reg', component: RegPageComponent},
  {path: 'user', component: UserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
