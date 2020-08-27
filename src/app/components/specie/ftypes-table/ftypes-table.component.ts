import { Component, OnInit, Input, OnChanges} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {SearchServiceParams} from 'aqgr-lib';
import { BaseTable01Component } from 'src/app/components/base-table01.component';
import { FtypesService } from 'src/app/services/specie/ftypes.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-ftypes-table',
    templateUrl: './ftypes-table.component.html',
    styleUrls: ['./ftypes-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FtypesTableComponent extends BaseTable01Component {
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

        if(!data || !data.ftypeCategories) return;

        newdata=JSON.parse(JSON.stringify(data.ftypeCategories));

        if(!environment.production){
            newdata[0]._toggle=true;
        }

        return newdata.map(e=>({
            ...e,
            _children: e.ftypes
        }));
    }


    /**
     * event called by the accept btn
     *
     * @param name the name of the specie
     */
    public onAcceptClick(name):void{
        /* TODO: onAcceptClick to be implemented */
        console.log("Accept "+name);
    }

    /**
     * event called by the reject btn
     *
     * @param name the name of the specie
     */
    public onRejectClick(name):void{
        /* TODO: onRejectClick to be implemented */
        console.log("Reject "+name);
    }

}

