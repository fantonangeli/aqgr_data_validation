import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

    /**
     * convert Yes No to boolean
     *
     * @param {string} val the value to convert
     * @returns {boolean} the new value
     */
    static yn2Bool(val:string):boolean{
        return val==="Yes"?true:false;
    }

    /**
     * convert boolean to Yes/No
     *
     * @param {boolean} val the value to convert
     * @returns {string} Yes or No
     */
    static bool2YN(val:boolean):string{
        return val?"Yes":"No";
    }


}
