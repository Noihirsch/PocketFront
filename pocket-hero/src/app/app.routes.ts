// app.routes.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileviewComponent } from './profile/profileview/profileview.component';
import { HomeViewComponent } from './home/home-view/home-view.component';
import { FaqComponent } from './home/faq/faq.component';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to '/home'
  { path: 'home', data: { breadcrumb: 'home' }, component: HomeViewComponent },
  { path: 'profile', data: { breadcrumb: 'profile' }, component: ProfileviewComponent },
  { path: 'faq', data: { breadcrumb: 'faq' }, component: FaqComponent },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
