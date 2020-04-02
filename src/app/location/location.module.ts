import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location/location.component';
import { AuthTemplateModule } from '../auth-template/auth-template.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LocationComponent],
  imports: [
    CommonModule,
    AuthTemplateModule,
    RouterModule
  ]
})
export class LocationModule { }
