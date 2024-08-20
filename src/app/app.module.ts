import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { StockerInvestmentsComponent } from './components/personal-portfolios/stocker-investments/stocker-investments.component';
import { MutualFundsInvestmentsComponent } from './components/personal-portfolios/mutual-funds-investments/mutual-funds-investments.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, NavbarComponent, HttpClientModule],
  providers: [provideClientHydration(), provideHttpClient(withFetch())  // Add this line to enable fetch API
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
