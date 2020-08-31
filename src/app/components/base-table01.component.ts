import { Input, OnInit } from '@angular/core';
import {SearchServiceParams} from 'aqgr-lib';
import { LoggerService } from 'aqgr-lib';
import { environment } from 'src/environments/environment';

/**
 * Base class to be extended from tables components
 */
export class BaseTable01Component implements OnInit{
    tableData=[];
    defaultDateFormat=environment.defaultDateFormat;
    logger: LoggerService;

    @Input() searchServiceParams=new SearchServiceParams();

    constructor(protected service){
        this.logger=new LoggerService();
    }

    /**
     * load data for the table and set it to tableData
     *
     * @param data the data from the service
     */
    loadTableData(data: {}): object[]{
        return [];
    }

    /**
     * fetch the data
     *
     */
    fetchData() {
        this.searchServiceParams.limit=0;

        this.service.getAll(this.searchServiceParams).subscribe(
            (data)=>{
                this.tableData=this.loadTableData(data);
            },
            (error)=>{
                this.logger.error("Network error: ", error);
            }
        );

    }


    ngOnInit(){
        this.fetchData();
    }


}
