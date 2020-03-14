import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserLoginComponent
  },  
  {
    path: ':VendorLogin',
    redirectTo: 'VendorLogin',
    component: VendorLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
