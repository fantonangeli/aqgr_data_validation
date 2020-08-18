import { Component, OnInit, Input} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { DatePipe } from '@angular/common';
import { CountriesService } from '../../../services/countries.service';
import {SearchServiceParams} from 'aqgr-lib';
import { LoggerService } from 'aqgr-lib';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-countries-table',
    templateUrl: './countries-table.component.html',
    encapsulation: ViewEncapsulation.None
})
export class CountriesTableComponent {
    tableData=[];
    data=[];


    constructor(private service: CountriesService, private logger:LoggerService, private datePipe:DatePipe){
        this.fetchData();
    }

    /**
     * load data for the table and set it to tableData
     *
     * @param {Object[]} data the data from the service
     */
    loadTableData(data){
        let newdata;

        if(!data || !data.continents) return;

        newdata=JSON.parse(JSON.stringify(data.continents));

        return newdata.map(e=>({
            ...e,
            "children": e.regions.map(r=>({
                ...r,
                "children":r.countries
            }))
        }));
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




}
