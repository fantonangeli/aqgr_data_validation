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
  { path: 'country/:id', component: CountryComponent },
  { path: 'species/:id', component: SpecieComponent },
  { path: 'ftype/:id', component: FtypeComponent },
  { path: 'sftype/:id', component: SFtypeComponent },
  { path: 'error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
