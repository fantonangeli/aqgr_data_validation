import { Injectable } from '@angular/core';
import { SearchServiceParams } from 'aqgr-lib';

@Injectable({
    providedIn: 'root'
})
export class UserStateService {
    private _ssp: SearchServiceParams= new SearchServiceParams();

    public get ssp(){
        return this._ssp;
    }

    public set ssp(ssp: SearchServiceParams){
        debugger;
        this._ssp=ssp;
    }
}
