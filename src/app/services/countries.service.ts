import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { shareReplay, map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { LoggerService } from "aqgr-lib";
import { SearchServiceParams } from "aqgr-lib";
import { BaseService } from "aqgr-lib";

@Injectable({
  providedIn: "root",
})
export class CountriesService extends BaseService {
    constructor(http: HttpClient, logger: LoggerService) {
        super(http, environment.services.params);
    }

    /**
     * get all data or filtered from the server
     *
     * @param params ssp the params to send to the service
     */
    getAll(ssp: SearchServiceParams=new SearchServiceParams()): Observable<any> {
        return this._getAll(
            "FishStatCultSpecCountriesService",
            environment.services.countries.all,
            ssp
        );
    }
}
