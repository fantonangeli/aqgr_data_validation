import { Component, OnInit, Input, OnChanges} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {SearchServiceParams} from 'aqgr-lib';
import { BaseTable01Component } from 'src/app/components/base-table01.component';
import { FtypesService } from 'src/app/services/specie/ftypes.service';
import { environment } from 'src/environments/environment';
import * as jsonata from 'jsonata';

@Component({
    selector: 'app-ftypes-table',
    templateUrl: './ftypes-table.component.html',
    styleUrls: ['./ftypes-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FtypesTableComponent extends BaseTable01Component implements OnInit{
    @Input() searchServiceParams: SearchServiceParams;

    constructor(service: FtypesService){
        super(service);
    }


    /**
     * load data for the table and set it to tableData
     *
     * @param data the data from the service
     */
    public loadTableData(data){
        let newdata;

        if(!data) return;

        newdata=jsonata('${ ftypeCategory:{        "name": (ftypeCategory)[0], "ftypes": $count($), "_children":[$] } }.*').evaluate(data);

        if(!environment.production){
            newdata[0]._toggle=true;
        }

        return newdata;
    }


    /**
     * event called by the accept btn
     *
     * @param data the data to be saved
     */
    public onAcceptClick(data):void{
        /* TODO: onAcceptClick to be implemented */
        if(!data || !data.name) return;

        this.service.edit(data.name, data);
    }

    /**
     * event called by the reject btn
     *
     * @param name the name of the specie
     */
    public onRejectClick(data):void{
        /* TODO: onRejectClick to be implemented */
        console.log("Reject "+name);
    }

    ngOnInit(){
        this.searchServiceParams.ftype=this.searchServiceParams.ftype || "null";
        super.ngOnInit();
    }
}

