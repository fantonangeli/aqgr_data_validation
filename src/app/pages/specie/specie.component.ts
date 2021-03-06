import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { SpeciesService } from 'src/app/services/species/species.service';
import { environment } from "src/environments/environment";
import { LoggerService, SearchServiceParams, BaseService } from "aqgr-lib";
import { UtilsService } from 'src/app/services/utils.service';
import { BasePage01Component } from 'src/app/components/base-page01.component';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.scss']
})
export class SpecieComponent extends BasePage01Component implements OnInit {

    yn2Bool=UtilsService.yn2Bool;

    constructor(injector: Injector, service: SpeciesService){
        super(injector, service);
        this.userStateService.ssp.ftype="";
    }

    /**
     * event executed when element info are loaded
     */
    onInfoLoaded(){
        // this.searchServiceParams.specie=this.info.name;
        this.userStateService.ssp.specie=this.info.name;
    }

    /**
     * event called by the publish btn
     *
     * @param {any} item the item from the table
     */
    public onPublishClick(item):void{
        item.status=environment.statuses.published;

        this.saveData(item);
    }


    /**
     * event called by the Unpublish btn
     *
     * @param {any} item the item from the table
     */
    public onUnpublishClick(item):void{
        item.status=environment.statuses.accepted;

        this.saveData(item);
    }

    /**
     * Toggle the native flag for this specie and send the value to the service
     * @param isNative the new native value
     */
    toggleNative(isNative:boolean):void {
        this.info.native_CM=UtilsService.bool2YN(isNative);

        this.saveData(this.info);
    }


}
