¡import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';

@NgModule({
  declarations: [
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HomeViewComponent]
})
export class AppModule { }