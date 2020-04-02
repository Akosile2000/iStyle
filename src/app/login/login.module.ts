import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { ForgotpasswordModule } from '../forgotpassword/forgotpassword.module';


@NgModule({
  declarations: [UserLoginComponent, VendorLoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ForgotpasswordModule
  ], 
  exports: [UserLoginComponent, VendorLoginComponent],
})
export class LoginModule { }
