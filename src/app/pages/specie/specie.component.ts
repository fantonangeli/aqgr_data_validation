import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpecieInfoService } from 'src/app/services/specie/specie-info.service';
import { environment } from "src/environments/environment";
import { LoggerService, SearchServiceParams, BaseService } from "aqgr-lib";

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.scss']
})
export class SpecieComponent implements OnInit {
    alphaCode:string;
    specieName="";
    searchServiceParams=new SearchServiceParams();

  constructor(private route: ActivatedRoute, private _specieInfoService:SpecieInfoService, private _logger:LoggerService) { }
    
    /**
     * fetch the data and load them
     * @param alphaCode specie code
     *
     */
    fetchInfo(alphaCode:string) {
        this._specieInfoService.getData(this.alphaCode).subscribe(
            (data)=>{
                this.specieName=data.name;
                this.searchServiceParams.specie=this.specieName;
            },
            (error)=>{
                this._logger.error("Network error: ", error);
            }
        );

    }

    ngOnInit(){
        this.alphaCode = this.route.snapshot.paramMap.get("alphaCode");

        this.fetchInfo(this.alphaCode);
    }

}
