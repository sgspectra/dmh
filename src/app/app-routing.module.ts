import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './user/user.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {CharacterComponent} from './character/character.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'users', component: UserComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'login', component: AuthenticationComponent},
  {path: 'characters', component: CharacterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
