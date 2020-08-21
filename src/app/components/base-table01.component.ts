import { Input } from '@angular/core';
import {SearchServiceParams} from 'aqgr-lib';
import { LoggerService } from 'aqgr-lib';
import { environment } from '../../environments/environment';

/**
 * Base class to be extended from tables components
 */
export class BaseTable01Component {
    tableData=[];
    defaultDateFormat=environment.defaultDateFormat;
    logger: LoggerService;

    @Input() searchServiceParams: SearchServiceParams;

    constructor(private service){
        this.fetchData();
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
        this.service.getAll(this.searchServiceParams).subscribe(
            (data)=>{
                this.tableData=this.loadTableData(data);
            },
            (error)=>{
                this.logger.error("Network error: ", error);
            }
        );

    }




}
