import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { shareReplay, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { LoggerService, SearchServiceParams, BaseService } from "aqgr-lib";

@Injectable({
  providedIn: "root",
})
export class SpeciesService extends BaseService {
    constructor(http: HttpClient, logger: LoggerService) {
        super(http, environment.services.params, false);
    }

    /**
     * get all data or filtered from the server
     *
     * @param params ssp the params to send to the service
     */
    getAll(ssp: SearchServiceParams=new SearchServiceParams()): Observable<any> {
        return this._getAll(
            "SpeciesService",
            environment.services.species.all,
            ssp
        );
    }


    /**
     * get info about a specie
     *
     * @params alphaCode the alphaCode of the specie
     */
    getData(id: string): Observable<any> {

        return this._getById(
            "SpeciesService",
            environment.services.species.info,
            id
        );
    }

    /**
     * edit an item.
     *
     * @param id the id
     * @param data the data to be saved
     * @returns an observable
     */
    edit(id, data): Observable<any>{
        return this._edit(
            "SpeciesService",
            environment.services.species.edit(id),
            data
        );
    }
}
