import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import {SearchServiceParams} from 'aqgr-lib';
import { LoggerService } from 'aqgr-lib';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-countries-table',
    templateUrl: './countries-table.component.html',
    encapsulation: ViewEncapsulation.None
})
export class CountriesTableComponent implements OnChanges {
    tableData=[];
    data=[];


    constructor(private service: CountriesService, private logger:LoggerService){
    }

    /**
     * load data for the table and set it to tableData
     *
     * @param {Object[]} data the data from the service
     */
    loadTableData(data){
        let newdata;

        if(!data || !data.Continents) return;

        newdata=JSON.parse(JSON.stringify(data.Continents));

        return newdata.sort((a, b) => (a.Name > b.Name) ? 1 : -1).map(e=>[
            e.nameEn,
            e.specie,
            e.ftypes,
            e.sftypes,
            e.regions.sort((a, b) => (a.Name > b.Name) ? 1 : -1).map(r=>[
                r.nameEn,
                r.specie,
                r.ftypes,
                r.sftypes,
                r.countries.sort((a, b) => (a.Name > b.Name) ? 1 : -1).map(c=>{
                    let rv=[
                        c.nameEn,
                        c.specie,
                        c.ftypes,
                        c.sftypes,
                    ];
                    rv["iso3"]=c.Ccode;
                    return rv;
                })

            ])
        ]);
    }

    /**
     * fetch the data
     *
     */
    fetchData() {
        this.service.getAll().subscribe(
            (data)=>{
                this.tableData=this.loadTableData(data);
            },
            (error)=>{
                this.logger.error("Network error: ", error);
            }
        );

    }


    ngOnChanges() {
        this.fetchData();
    }


}
