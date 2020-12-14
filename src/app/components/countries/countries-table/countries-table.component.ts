import { Component, OnInit, Input, Injector} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { CountriesService } from 'src/app/services/countries/countries.service';
import {SearchServiceParams} from 'aqgr-lib';
import { BaseTable01Component } from 'src/app/components/base-table01.component';
import { environment } from 'src/environments/environment';
import * as jsonata from 'jsonata';


@Component({
    selector: 'app-countries-table',
    templateUrl: './countries-table.component.html',
    styleUrls: ['./countries-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CountriesTableComponent extends BaseTable01Component {
    constructor(injector: Injector, service: CountriesService){
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

        newdata=jsonata('${ continent:{        "nameEn": (continent)[0], "species":$sum(species), "ftypes":$sum(ftypes), "sftypes":$sum(sftypes), "_children":[ { region:[{        "nameEn": (region)[0], "species":$sum(species), "ftypes":$sum(ftypes), "sftypes":$sum(sftypes), "_children":[$] } ] } ].* } }.*').evaluate(data);

        if(!environment.production){
            newdata[0]._toggle=true;
            newdata[0]._children[2]._toggle=true;
        }

        return newdata;
    }


}
