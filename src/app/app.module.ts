import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesTableComponent } from './components/countries/countries-table/countries-table.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { AqgrLibModule } from 'aqgr-lib';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CountriesTableComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AqgrLibModule,
    AppRoutingModule
  ],
  providers: [
        {provide: 'LoggingEnabled', useValue: environment.logging}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
