// src/app/home/home.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view/home-view.component';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbLayoutModule, NbMenuItem, NbMenuModule, NbSidebarModule, NbStepperModule } from '@nebular/theme';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    HomeViewComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbButtonModule,
    NbSidebarModule,
    NbStepperModule,
    NbMenuModule.forRoot(),
    NbCardModule


  ]
})
export class HomeModule { }