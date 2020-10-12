import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
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

  constructor(private route: ActivatedRoute, private _specieInfoService:SpecieInfoService, private _logger:LoggerService, private router:Router) { }
    isNative=false;
    origData:any;

    /**
     * fetch the data and load them
     * @param alphaCode specie code
     *
     */
    fetchInfo(alphaCode:string) {
        this._specieInfoService.getData(this.alphaCode).subscribe(
            (data)=>{
                this.specieName=data.name;
                this.isNative=data.native;
                this.origData=data;
                this.searchServiceParams.specie=this.specieName;
            },
            (error)=>{
                this._logger.error("Network error: ", error);
            }
        );

    }

    /**
     * Toggle the native flag for this specie and send the value to the service
     * @param isNative the new native value
     */
    toggleNative(isNative:boolean) {
        const newData=this.origData;
        newData.native=isNative;

        this._specieInfoService.edit(newData.id, newData).subscribe(
            (data)=>{
            },
            (err)=>{
                this.router.navigate(['/error']);
            }
        );
    }

    ngOnInit(){
        this.alphaCode = this.route.snapshot.paramMap.get("alphaCode");

        this.fetchInfo(this.alphaCode);
    }

}
