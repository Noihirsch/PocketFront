// app.routes.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileviewComponent } from './profile/profileview/profileview.component';
import { HomeViewComponent } from './home/home-view/home-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to '/home'
  { path: 'home', data: { breadcrumb: 'home' }, component: HomeViewComponent },
  { path: 'profile', data: { breadcrumb: 'profile' }, component: ProfileviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
