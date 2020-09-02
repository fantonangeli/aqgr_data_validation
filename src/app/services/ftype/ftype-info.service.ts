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
    constructor(http: HttpClient, logger: LoggerService) {
        super(http, environment.services.params);
    }

    /**
     * get info about a ftype
     *
     * @params alphaCode the alphaCode of the ftype
     */
    getData(name: string): Observable<any> {

        return this._getByParams(
            this.constructor.name,
            environment.services.ftypes.info, 
            {name}
        );
    }




}
