import { Input, OnInit, Injector, Directive } from '@angular/core';
import {SearchServiceParams} from 'aqgr-lib';
import {Router, ActivatedRoute} from '@angular/router';
import { LoggerService } from 'aqgr-lib';
import { environment } from 'src/environments/environment';

/**
 * Base class to be extended from page components
 */
@Directive()
export class BasePage01Component implements OnInit{
    id:string;
    info:any={};
    statuses=environment.statuses;
    router:Router;
    logger: LoggerService;
    route:ActivatedRoute;
    searchServiceParams=new SearchServiceParams();

    constructor(protected injector, protected service){
        this.logger=new LoggerService();
        this.router=injector.get(Router);
        this.route=injector.get(ActivatedRoute);
    }


    /**
     * event executed when element info are loaded
     */
    onInfoLoaded():void{}

    /**
     * fetch the data and load them
     * @param id the id of the element
     *
     */
    fetchInfo(id:string) {
        this.service.getData(id).subscribe(
            (data)=>{
                this.info=data;
                this.onInfoLoaded();
            },
            (error)=>{
                this.logger.error("Network error: ", error);
            }
        );

    }

    /**
     * Send the data of an item to the service to save it
     *
     * @param data the data to save
     */
    protected saveData(data):void{
        if (!data) throw "data is not valid!";

        this.service.edit(data.id, data).subscribe(
            (newdata)=>{
            },
            (err)=>{
                // this.router.navigate(['/error']);
            }
        );
    }

    /**
     * event called by the accept btn
     *
     * @param {any} item the item from the table
     */
    public onAcceptClick(item):void{
        item.status=environment.statuses.accepted;

        this.saveData(item);
    }


    /**
     * event called by the reject btn
     *
     * @param {any} item the item from the table
     */
    public onRejectClick(item):void{
        item.status=environment.statuses.rejected;

        this.saveData(item);
    }

    ngOnInit(){
        this.id = this.route.snapshot.paramMap.get("id");

        this.fetchInfo(this.id);
    }

}
