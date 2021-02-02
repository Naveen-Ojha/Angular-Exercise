import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '',redirectTo:'login',pathMatch:'full'},
  { path: 'login',component:LoginComponent},
  { path: 'signup',component:SignupComponent},
  { path: 'data', loadChildren: () => import('./data/data.module').then(m => m.DataModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
