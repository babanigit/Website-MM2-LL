import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NavbarComponent, HttpClientModule],
  providers: [provideClientHydration(), provideHttpClient(withFetch())  // Add this line to enable fetch API
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
