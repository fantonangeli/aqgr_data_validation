import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { shareReplay, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { LoggerService, SearchServiceParams, BaseService } from "aqgr-lib";

@Injectable({
  providedIn: 'root'
})
export class FtypeInfoService extends BaseService{
    /* TODO: Talk with Kiran: Bug if you change the status from the ftypes service, it is not propagated in this service */
    constructor(http: HttpClient, logger: LoggerService) {
        super(http, environment.services.params, false);
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




}
