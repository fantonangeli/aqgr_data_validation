import { Component, OnInit, Input} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { CountriesService } from 'src/app/services/countries/countries.service';
import {SearchServiceParams} from 'aqgr-lib';
import { BaseTable01Component } from 'src/app/components/base-table01.component';

@Component({
    selector: 'app-countries-table',
    templateUrl: './countries-table.component.html',
    styleUrls: ['./countries-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CountriesTableComponent extends BaseTable01Component {
    constructor(service: CountriesService){
        super(service);
    }

    /**
     * load data for the table and set it to tableData
     *
     * @param data the data from the service
     */
    loadTableData(data){
        let newdata;

        if(!data || !data.continents) return;

        newdata=JSON.parse(JSON.stringify(data.continents));

        /* TODO: (high) remove me */
        newdata[0]._toggle=true;
        newdata[0].regions[2]._toggle=true;

        return newdata.map(e=>({
            ...e,
            _children: e.regions.map(r=>({
                ...r,
                _children:r.countries
            }))
        }));
    }


}
