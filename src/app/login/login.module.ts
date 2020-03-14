import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';


@NgModule({
  declarations: [UserLoginComponent, VendorLoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
   
  ]
})
export class LoginModule { }
