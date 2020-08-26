import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FtypeInfoService } from 'src/app/services/ftype/ftype-info.service';
import { environment } from "src/environments/environment";
import { LoggerService, SearchServiceParams, BaseService } from "aqgr-lib";

@Component({
  selector: 'app-ftype',
  templateUrl: './ftype.component.html',
  styleUrls: ['./ftype.component.scss']
})
export class FtypeComponent implements OnInit {
    name:string;
    ftypeName="";
    searchServiceParams=new SearchServiceParams();

  constructor(private route: ActivatedRoute, private _ftypeInfoService:FtypeInfoService, private _logger:LoggerService) { }
    
    /**
     * fetch the data and load them
     * @param name ftype code
     *
     */
    fetchInfo(name:string) {
        this._ftypeInfoService.getData(this.name).subscribe(
            (data)=>{
                this.ftypeName=data.name;
                this.searchServiceParams.ftype=this.ftypeName;
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
