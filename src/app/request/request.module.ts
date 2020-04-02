import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestListComponent } from './request-list/request-list.component';
import { AuthTemplateModule } from '../auth-template/auth-template.module';


@NgModule({
  declarations: [RequestListComponent],
  imports: [
    CommonModule,
    RequestRoutingModule,
    AuthTemplateModule
  ]
})
export class RequestModule { }
