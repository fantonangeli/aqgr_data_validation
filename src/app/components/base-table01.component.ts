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
    origData=[];
    statuses=environment.statuses;

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
                this.origData=JSON.parse(JSON.stringify(data));
                this.tableData=this.loadTableData(data);
            },
            (error)=>{
                this.logger.error("Network error: ", error);
            }
        );

    }


    /**
     * gets the original data of a record.
     *
     * @param id the id of the record
     * @param data the haystack
     * @return the item, false otherwise
     */
    protected getItemById(id:string, data:any[]):object{
        const item=data.filter((e)=>e.id===id);

        return item.length?item[0]:false;
    }

    /**
     * Set a field of an item, send it to the service and update the table (if success).
     *
     * @param {any} row the row from the table
     * @param {string} field the field to be edited
     * @param {any} newValue the new value to be set
     * @returns {boolean} true if ok, false otherwise 
     */
    protected setItemField(row:any, field:string, newValue:any):boolean{
        let origRecData;

        if(!row) return false;

        origRecData=this.getItemById(row.id, this.origData);

        if(!origRecData) return false;

        origRecData[field]=newValue;

        this.service.edit(origRecData.id, origRecData);

        row[field]=newValue;
    }

    /**
     * event called by the accept btn
     *
     * @param {any} row the row from the table
     */
    public onAcceptClick(row):void{
        this.setItemField(row, "status", this.statuses.accepted);
    }


    /**
     * event called by the reject btn
     *
     * @param {any} row the row from the table
     */
    public onRejectClick(row):void{
        this.setItemField(row, "status", this.statuses.rejected);
    }

    ngOnInit(){
        this.fetchData();
    }


}
