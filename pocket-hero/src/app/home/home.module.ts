import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view/home-view.component';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbThemeService } from '@nebular/theme';


@NgModule({
  declarations: [
    HomeViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbThemeService.forRoot({ name: 'dark' })

  ]
})
export class HomeModule { }
