import { ActivatedRouteSnapshot } from "@angular/router";
import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { PRIMARY_OUTLET } from "@angular/router";
import { Router } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { UrlTree } from "@angular/router";
import { environment } from 'src/environments/environment';


@Injectable()
export class DenyDirectAccessService implements CanActivate {

    constructor(private router: Router){}

    public canActivate( activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): boolean {
        // if this is a page-refresh, we'll navigate to the home.
        if (!this.router.navigated && environment.production) {
            this.router.navigateByUrl("/");
            return false;
        }

        return true;

    }


}
