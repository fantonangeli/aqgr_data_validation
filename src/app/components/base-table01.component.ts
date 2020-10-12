import { Input, OnInit, Injector } from '@angular/core';
import {Observable, merge} from 'rxjs';
import {SearchServiceParams} from 'aqgr-lib';
import {Router} from '@angular/router';
import { LoggerService } from 'aqgr-lib';
import { environment } from 'src/environments/environment';

/**
 * Base class to be extended from tables components
 */
export class BaseTable01Component implements OnInit{
    tableData=[];
    defaultNumberFormat=environment.defaultNumberFormat;
    defaultDateFormat=environment.defaultDateFormat;
    logger: LoggerService;
    origData=[];
    statuses=environment.statuses;
    router:Router;
    production=environment.production;

    @Input() searchServiceParams=new SearchServiceParams();

    constructor(protected injector, protected service){
        this.logger=new LoggerService();
        this.router=injector.get(Router);
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

        this.service.edit(origRecData.id, origRecData).subscribe(
            (data)=>{
                row[field]=newValue;
            },
            (err)=>{
                this.router.navigate(['/error']);
            }
        );
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

    /**
     * Set a field in all items, send it to the service and reload the table (if success).
     *
     * @param {any[]} origData the row from the table
     * @param {string} field the field to be edited
     * @param {any} newValue the new value to be set
     * @returns {boolean} true if ok, false otherwise 
     */
    protected setItemsField(origData:any[], field:string, newValue:any):boolean{
        const obss=[];
        let items=[];

        if(!origData.length) return;

        items=origData.filter(e => e[field]!==newValue);

        if(!items.length) return;

        for (let i = 0, len = items.length; i < len; i++) {
            const item=items[i];
            item[field]=newValue;
            obss.push(this.service.edit(item.id, item));
        }

        merge(...obss).subscribe(
            (data)=>{
            },
            (err)=>{
                this.router.navigate(['/error']);
            },
            ()=>{
                this.fetchData();
            }
        );
    }

    /**
     * change the status of all non-accepted items to accepted.
     *
     * @returns {void}
     */
    public acceptAll():void{
        this.setItemsField(this.origData, "status", environment.statuses.accepted);
    }

    /**
     * change the status of all accepted items to rejected.
     *
     * @returns {void}
     */
    public rejectAll():void{
        this.setItemsField(this.origData, "status", environment.statuses.rejected);
    }

    ngOnInit(){
        this.fetchData();
    }


}
