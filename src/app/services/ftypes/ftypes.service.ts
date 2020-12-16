import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { shareReplay, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { LoggerService, SearchServiceParams, BaseService } from "aqgr-lib";

@Injectable({
  providedIn: "root",
})
export class FtypesService extends BaseService {
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
            this.constructor.name,
            environment.services.ftypes.all,
            ssp
        );
    }

    /**
     * get info about a ftype
     *
     * @params id the id of the element
     */
    getData(id: string): Observable<any> {

        return this._getById(
            this.constructor.name,
            environment.services.ftypes.info,
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
            this.constructor.name,
            environment.services.ftypes.edit(id),
            data
        );
    }
}
