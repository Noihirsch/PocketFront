// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes'; // Import AppRoutesModule
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { NbCardModule, NbIconModule, NbMenuModule, NbSidebarModule, NbSidebarService, NbStepperModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

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
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule,
    NbStepperModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
