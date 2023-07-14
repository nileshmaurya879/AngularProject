import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../admin/login/login.component';
import {SignupComponent} from '../admin/signup/signup.component';

const routes: Routes = [
  {
    path:"admins",children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'signup',
        component:SignupComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
