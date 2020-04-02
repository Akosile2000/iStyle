import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { UserRegistrationComponent } from './registration/user-registration/user-registration.component';
import { VendorLoginComponent } from './login/vendor-login/vendor-login.component';
import { VendorRegistrationComponent } from './registration/vendor-registration/vendor-registration.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LocationComponent } from './location/location/location.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword/forgotpassword.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { ProfileComponent } from './profile/profile/profile.component';


const routes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent
  },

  {
    path: 'vendorlogin',
    component: VendorLoginComponent
  },

  {
    path: 'register',
    component: UserRegistrationComponent
  },

  {
    path: 'vendorregister',
    component: VendorRegistrationComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'selectlocation',
    component: LocationComponent
  },

  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },

  {
    path: 'request-list',
    component: RequestListComponent
  },

  {
    path: 'profile',
    component: ProfileComponent
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
