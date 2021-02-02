import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthguardGuard } from '../app/authguard/authguard.guard';

const routes: Routes = [
  { path: '',redirectTo:'login',pathMatch:'full'},
  { path: 'login',component:LoginComponent},
  { path: 'signup',component:SignupComponent},
  { path: 'data', loadChildren: () => import('./data/data.module').then(m => m.DataModule),canActivate:[AuthguardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
