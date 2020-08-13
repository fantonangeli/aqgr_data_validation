import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesTableComponent } from './components/countries/countries-table/countries-table.component';
import { CountriesComponent } from './pages/countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesTableComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
