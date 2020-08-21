import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesComponent } from './pages/countries/countries.component';
import { CountryComponent } from './pages/country/country.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'countries' },
  { path: 'countries', component: CountriesComponent },
  { path: 'country/:iso3', component: CountryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
