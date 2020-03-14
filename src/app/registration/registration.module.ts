import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component';


@NgModule({
  declarations: [UserRegistrationComponent, VendorRegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
