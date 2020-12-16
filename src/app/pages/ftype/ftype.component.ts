import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FtypeInfoService } from 'src/app/services/ftype/ftype-info.service';
import { environment } from "src/environments/environment";
import { LoggerService, SearchServiceParams, BaseService } from "aqgr-lib";
import { FtypesTableComponent } from 'src/app/components/specie/ftypes-table/ftypes-table.component';
import { BasePage01Component } from 'src/app/components/base-page01.component';

@Component({
  selector: 'app-ftype',
  templateUrl: './ftype.component.html',
  styleUrls: ['./ftype.component.scss']
})
export class FtypeComponent extends BasePage01Component implements OnInit {

    @ViewChild(FtypesTableComponent) tableComponent: FtypesTableComponent;

    constructor(injector: Injector, service: FtypeInfoService){
        super(injector, service);
    }

    /**
     * event executed when element info are loaded
     */
    onInfoLoaded(){
        this.searchServiceParams.ftype=this.info.name;
        this.userStateService.ssp.ftype=this.info.name;
    }

    /**
     * event fired on AcceptAllClick.
     *
     */
    public onAcceptAllClick():void{
        this.tableComponent.acceptAll();
    }

}
