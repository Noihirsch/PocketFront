// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes'; // Import AppRoutesModule
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { NbThemeModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule, 
    NbThemeModule.forRoot({ name: 'dark' }),
    HomeModule,
    ProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
