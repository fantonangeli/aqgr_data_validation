import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FtypeInfoService } from 'src/app/services/ftype/ftype-info.service';
import { environment } from "src/environments/environment";
import { LoggerService, SearchServiceParams, BaseService } from "aqgr-lib";
import { BasePage01Component } from 'src/app/components/base-page01.component';

@Component({
  selector: 'app-sftype',
  templateUrl: './sftype.component.html',
  styleUrls: ['./sftype.component.scss']
})
export class SFtypeComponent extends BasePage01Component implements OnInit {

    constructor(injector: Injector, service: FtypeInfoService){
        super(injector, service);
    }


}
