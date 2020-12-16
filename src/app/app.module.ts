import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { DenyDirectAccessService } from './services/deny-direct-access.service';
import { AppComponent } from './app.component';
import { CountriesTableComponent } from './components/countries/countries-table/countries-table.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { AqgrLibModule } from 'aqgr-lib';
import { environment } from '../environments/environment';
import { CountryComponent } from './pages/country/country.component';
import { SpeciesTableComponent } from './components/country/species-table/species-table.component';
import { BackBtn01Component } from './components/back-btn01/back-btn01.component';
import { SpecieComponent } from './pages/specie/specie.component';
import { FtypesTableComponent } from './components/specie/ftypes-table/ftypes-table.component';
import { FtypeComponent } from './pages/ftype/ftype.component';
import { ErrorComponent } from './pages/error/error.component';
import { FunkyRadioComponent } from './components/funky-radio/funky-radio.component';
import { SFtypeComponent } from './pages/sftype/sftype.component';
import { SFtypesTableComponent } from './components/ftype/sftypes-table/sftypes-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesTableComponent,
    CountriesComponent,
    CountryComponent,
    SpeciesTableComponent,
    BackBtn01Component,
    SpecieComponent,
    FtypesTableComponent,
    FtypeComponent,
    ErrorComponent,
    FunkyRadioComponent,
    SFtypeComponent,
    SFtypesTableComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AqgrLibModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [
      DenyDirectAccessService,
      DatePipe,
      {provide: 'LoggingEnabled', useValue: environment.logging}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
