import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { NbCardModule, NbIconModule, NbMenuModule, NbSidebarModule, NbSidebarService, NbStepperModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';

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
    HttpClientModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: '',
          login: {
            endpoint: '/api/auth/login',
          },
          register: {
            endpoint: '/api/auth/register',
          },
        }),
      ],
      forms: {
        
      },
    }),
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
