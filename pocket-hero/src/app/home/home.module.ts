// src/app/home/home.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view/home-view.component';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbLayoutModule, NbMenuItem, NbMenuModule, NbSidebarModule, NbStepperModule } from '@nebular/theme';
import { FaqComponent } from './faq/faq.component';
import { PocketFooterComponent } from '../pocket-footer/pocket-footer.component';


@NgModule({
  declarations: [
    HomeViewComponent,
    FaqComponent, 
  PocketFooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbButtonModule,
    NbSidebarModule,
    NbStepperModule,
    NbMenuModule.forRoot(),
    NbCardModule,


  ]
})
export class HomeModule { }