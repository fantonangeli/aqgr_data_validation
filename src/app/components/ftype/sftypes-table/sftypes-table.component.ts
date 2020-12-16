import { Component, OnInit, Input, Injector} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {SearchServiceParams} from 'aqgr-lib';
import { BaseTable01Component } from 'src/app/components/base-table01.component';
import { FtypesService } from 'src/app/services/specie/ftypes.service';
import { environment } from 'src/environments/environment';
import * as jsonata from 'jsonata';

@Component({
  selector: 'app-sftypes-table',
  templateUrl: './sftypes-table.component.html',
  styleUrls: ['./sftypes-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SFtypesTableComponent extends BaseTable01Component implements OnInit{
    @Input() searchServiceParams: SearchServiceParams;

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

        if((!data) || (!data.length)) return;

        newdata=jsonata('${ ftypeCategory:{"name": (ftypeCategory)[0], "sftypes": $sum(sftypes), "_children":[$] } }.*').evaluate(data);

        if(!environment.production){
            newdata[0]._toggle=true;
        }

        return newdata;
    }

    ngOnInit(){
        this.searchServiceParams.ftype=this.searchServiceParams.ftype || null;
        super.ngOnInit();
    }
}

