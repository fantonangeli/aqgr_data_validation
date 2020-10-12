import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { shareReplay, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { LoggerService, SearchServiceParams, BaseService } from "aqgr-lib";

@Injectable({
  providedIn: 'root'
})
export class SpecieInfoService extends BaseService{
    constructor(http: HttpClient, logger: LoggerService) {
        super(http, environment.services.params);
    }

    /**
     * get info about a specie
     *
     * @params alphaCode the alphaCode of the specie
     */
    getData(id: string): Observable<any> {

        return this._getById(
            this.constructor.name,
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
    edit(id:string, data:any): Observable<any>{
        return this._edit(
            this.constructor.name,
            environment.services.species.infoEdit(id),
            data
        );
    }


}
