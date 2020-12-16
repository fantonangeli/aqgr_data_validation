import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DenyDirectAccessService } from 'src/app/services/deny-direct-access.service';

import { CountriesComponent } from 'src/app/pages/countries/countries.component';
import { CountryComponent } from 'src/app/pages/country/country.component';
import { SpecieComponent } from 'src/app/pages/specie/specie.component';
import { FtypeComponent } from 'src/app/pages/ftype/ftype.component';
import { SFtypeComponent } from 'src/app/pages/sftype/sftype.component';
import { ErrorComponent } from 'src/app/pages/error/error.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'countries' },
  { path: 'countries', component: CountriesComponent},
  { path: 'country/:id', component: CountryComponent, canActivate : [DenyDirectAccessService]  },
  { path: 'species/:id', component: SpecieComponent, canActivate : [DenyDirectAccessService]  },
  { path: 'ftype/:id', component: FtypeComponent, canActivate : [DenyDirectAccessService]  },
  { path: 'sftype/:id', component: SFtypeComponent, canActivate : [DenyDirectAccessService]  },
  { path: 'error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
