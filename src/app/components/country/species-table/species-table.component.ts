import { Component, OnInit, Input, OnChanges} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {SearchServiceParams} from 'aqgr-lib';
import { BaseTable01Component } from 'src/app/components/base-table01.component';
import { SpeciesService } from 'src/app/services/country/species.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-species-table',
    templateUrl: './species-table.component.html',
    styleUrls: ['./species-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SpeciesTableComponent extends BaseTable01Component {

    constructor(service: SpeciesService){
        super(service);
    }

    /**
     * load data for the table and set it to tableData
     *
     * @param data the data from the service
     */
    public loadTableData(data){
        let newdata;

        if(!data || !data.taxonomies) return;

        newdata=JSON.parse(JSON.stringify(data.taxonomies));

        if(!environment.production){
            /* TODO: (low) remove me */
            newdata[2]._toggle=true;
        }

        return newdata.map(e=>({
            ...e,
            _children: e.species
        }));
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
