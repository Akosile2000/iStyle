import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'UserRegistration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
  },

  {
    path: 'UserLogin',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },

  {
    path: ':VendorLogin',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
