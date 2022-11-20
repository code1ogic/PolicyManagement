import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginModuleComponent } from './login-module/login-module.component';
import { PolicyRegistrationComponent } from './policy-registration/policy-registration.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SearchPolicyComponent } from './search-policy/search-policy.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'register-user',component:RegisterUserComponent},
  {path:'policy-registration',component:PolicyRegistrationComponent},
  {path:'search-policy',component:SearchPolicyComponent},
  {path:'login-module',component:LoginModuleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
