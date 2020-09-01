import { Component, OnInit, Input, Injector} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {SearchServiceParams} from 'aqgr-lib';
import { BaseTable01Component } from 'src/app/components/base-table01.component';
import { SpeciesService } from 'src/app/services/country/species.service';
import { environment } from 'src/environments/environment';
import * as jsonata from 'jsonata';

@Component({
    selector: 'app-species-table',
    templateUrl: './species-table.component.html',
    styleUrls: ['./species-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SpeciesTableComponent extends BaseTable01Component {

    constructor(injector: Injector, service: SpeciesService){
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

        newdata=jsonata('${ taxonomy:{        "name": (taxonomy)[0], "ftypes": $count($), "_children":[$] } }.*').evaluate(data);

        if(!environment.production){
            newdata[1]._toggle=true;
        }

        return newdata;
    }


    /**
     * event called by the publish btn
     *
     * @param name the name of the specie
     */
    public onPublishClick(name):void{
        /* TODO: onPublishClick to be implemented */
        console.log("Publish "+name);
    }

}
