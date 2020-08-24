import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesTableComponent } from './components/countries/countries-table/countries-table.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { AqgrLibModule } from 'aqgr-lib';
import { environment } from '../environments/environment';
import { CountryComponent } from './pages/country/country.component';
import { SpeciesTableComponent } from './components/country/species-table/species-table.component';
import { BackBtn01Component } from './components/back-btn01/back-btn01.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesTableComponent,
    CountriesComponent,
    CountryComponent,
    SpeciesTableComponent,
    BackBtn01Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AqgrLibModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [
      DatePipe,
      {provide: 'LoggingEnabled', useValue: environment.logging}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
