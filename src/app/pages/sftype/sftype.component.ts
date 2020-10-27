import { Component, OnInit, Input, Injector} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {SearchServiceParams} from 'aqgr-lib';
import { BaseTable01Component } from 'src/app/components/base-table01.component';
import { FtypesService } from 'src/app/services/specie/ftypes.service';
import { environment } from 'src/environments/environment';
import * as jsonata from 'jsonata';

@Component({
  selector: 'app-sftype',
  templateUrl: './sftype.component.html',
  styleUrls: ['./sftype.component.scss']
})
export class SFtypeComponent extends BaseTable01Component implements OnInit{
    @Input() searchServiceParams: SearchServiceParams;
    isPrimaryFtype=true;

    constructor(injector: Injector, service: FtypesService){
        super(injector, service);
    }


    /**
     * load data for the table and set it to tableData
     *
     * @param data the data from the service
     */
    public loadTableData(data){
        let newdata;

        if(!data) return;

        newdata=jsonata('${ ftypeCategory:{"name": (ftypeCategory)[0], "sftypes": $sum(sftypes), "_children":[$] } }.*').evaluate(data);

        if(!environment.production){
            newdata[0]._toggle=true;
        }

        return newdata;
    }

    ngOnInit(){
        this.searchServiceParams.ftype=this.searchServiceParams.ftype || null;
        this.isPrimaryFtype=this.searchServiceParams.ftype === null;
        super.ngOnInit();
    }
}

