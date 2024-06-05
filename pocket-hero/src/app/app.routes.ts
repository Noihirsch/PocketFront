import { Routes } from '@angular/router';
import { ProfileviewComponent } from './profile/profileview/profileview.component';
import { HomeViewComponent } from './home/home-view/home-view.component';

export const routes: Routes = [
  { path: '', data: { breadcrumb: 'home' }, component: HomeViewComponent },

{path: 'profile', data: { breadcrumb: 'profile' }, component: ProfileviewComponent},



];