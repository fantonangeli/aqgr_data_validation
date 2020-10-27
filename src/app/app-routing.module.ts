import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesComponent } from 'src/app/pages/countries/countries.component';
import { CountryComponent } from 'src/app/pages/country/country.component';
import { SpecieComponent } from 'src/app/pages/specie/specie.component';
import { FtypeComponent } from 'src/app/pages/ftype/ftype.component';
import { SFtypeComponent } from 'src/app/pages/sftype/sftype.component';
import { ErrorComponent } from 'src/app/pages/error/error.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'countries' },
  { path: 'countries', component: CountriesComponent },
  { path: 'country/:iso3', component: CountryComponent },
  { path: 'species/:alphaCode', component: SpecieComponent },
  { path: 'ftype/:name', component: FtypeComponent },
  { path: 'sftype/:name', component: SFtypeComponent },
  { path: 'error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
