import { MainContentComponent } from './main-content/main-content.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [
  { path : "", component : LoginComponent},
  { path : 'signup', component : SignupComponent},
  { path : 'login', component : LoginComponent},
  { path : 'main', component : MainContentComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
