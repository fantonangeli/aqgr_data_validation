import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FtypeInfoService } from 'src/app/services/ftype/ftype-info.service';
import { environment } from "src/environments/environment";
import { LoggerService, SearchServiceParams, BaseService } from "aqgr-lib";

@Component({
  selector: 'app-sftype',
  templateUrl: './sftype.component.html',
  styleUrls: ['./sftype.component.scss']
})
export class SFtypeComponent implements OnInit {
    name:string;
    info={};

  constructor(private route: ActivatedRoute, private _ftypeInfoService:FtypeInfoService, private _logger:LoggerService) { }
    
    /**
     * fetch the data and load them
     * @param name ftype code
     *
     */
    fetchInfo(id:string) {
        this._ftypeInfoService.getData(id).subscribe(
            (data)=>{
                this.info=data;
            },
            (error)=>{
                this._logger.error("Network error: ", error);
            }
        );

    }

    ngOnInit(){
        this.name = this.route.snapshot.paramMap.get("name");

        this.fetchInfo(this.name);
    }

}
