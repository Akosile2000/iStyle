import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component';


const routes: Routes = [
  {
    path: '',
    component: UserRegistrationComponent
  }, 

  {
    path: 'VendorRegistration',
    component: VendorRegistrationComponent
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
