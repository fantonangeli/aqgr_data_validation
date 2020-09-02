import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { shareReplay, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { LoggerService, SearchServiceParams, BaseService } from "aqgr-lib";

@Injectable({
  providedIn: 'root'
})
export class CountryInfoService extends BaseService{
    constructor(http: HttpClient, logger: LoggerService) {
        super(http, environment.services.params);
    }

    /**
     * get by countryCode
     * @params
     * @returns {Observable}
     */
    getData(iso3: string): Observable<any> {

        return this._getByParams(
            "CountryInfoService",
            environment.services.countries.info,
            {iso3}
        );
    }




}
