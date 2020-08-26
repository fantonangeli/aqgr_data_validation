import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesComponent } from 'src/app/pages/countries/countries.component';
import { CountryComponent } from 'src/app/pages/country/country.component';
import { SpecieComponent } from 'src/app/pages/specie/specie.component';
import { FtypeComponent } from 'src/app/pages/ftype/ftype.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'countries' },
  { path: 'countries', component: CountriesComponent },
  { path: 'country/:iso3', component: CountryComponent },
  { path: 'specie/:alphaCode', component: SpecieComponent },
  { path: 'ftype/:name', component: FtypeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
