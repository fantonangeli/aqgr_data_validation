import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { SpecieInfoService } from 'src/app/services/specie/specie-info.service';
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

    constructor(injector: Injector, service: SpecieInfoService){
        super(injector, service);
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
