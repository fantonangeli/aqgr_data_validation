import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CountryInfoService } from 'src/app/services/country/country-info.service';
import { environment } from "src/environments/environment";
import { LoggerService, SearchServiceParams, BaseService } from "aqgr-lib";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
    iso3:string;
    countryName="";
    searchServiceParams=new SearchServiceParams();
    info={};

  constructor(private route: ActivatedRoute, private _countryInfoService:CountryInfoService, private _logger:LoggerService) { }
    
    /**
     * fetch the data and load them
     * @param iso3 country code
     *
     */
    fetchInfo(iso3:string) {
        this._countryInfoService.getData(this.iso3).subscribe(
            (data)=>{
                this.countryName=data.nameEn;
                this.info=data;
                this.searchServiceParams.country=this.countryName;
            },
            (error)=>{
                this._logger.error("Network error: ", error);
            }
        );

    }

    ngOnInit(){
        this.iso3 = this.route.snapshot.paramMap.get("iso3");

        this.fetchInfo(this.iso3);
    }

}
