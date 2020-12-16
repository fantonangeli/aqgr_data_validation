import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CountryInfoService } from 'src/app/services/country/country-info.service';
import { environment } from "src/environments/environment";
import { LoggerService, SearchServiceParams, BaseService } from "aqgr-lib";
import { BasePage01Component } from 'src/app/components/base-page01.component';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent extends BasePage01Component implements OnInit {

    constructor(injector: Injector, service: CountryInfoService){
        super(injector, service);
    }

    /**
     * event executed when element info are loaded
     */
    onInfoLoaded(){
        this.searchServiceParams.country=this.info.nameEn;
        this.userStateService.ssp.country=this.info.nameEn;
    }
}
