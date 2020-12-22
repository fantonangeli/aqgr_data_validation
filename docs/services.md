# AqGR Data Validation Services

This is the documentation of the REST services used in AqGR Data Validation project.

All the services are also listed in the dev environment under this url:
<br>
http://localhost:3000/

## Table of content

- [AqGR Data Validation Services](#aqgr-data-validation-services)
  * [Table of content](#table-of-content)
  * [Services per pages](#services-per-pages)
    + [Countries page services](#countries-page-services)
    + [Country page services](#country-page-services)
    + [Species page services](#species-page-services)
    + [Ftype page services](#ftype-page-services)
  * [Services responses](#services-responses)
    + [Countries response (GET)](#countries-response-get)
    + [Country-info response (GET)](#country-info-response-get)
    + [Species response (GET)](#species-response-get)
    + [Species response (PUT)](#species-response-put)
    + [Species-info response (GET/PUT)](#species-info-response-getput)
    + [Ftypes response (GET)](#ftypes-response-get)
    + [Ftypes response (PUT)](#ftypes-response-put)
    + [Ftype-info response (GET/PUT)](#ftype-info-response-getput)
  * [JSON properties list](#json-properties-list)


## Services per pages

These are the services divided per page.
<br>
<br>

### Countries page services 

This services are used to get data in countries page:

| Environment key | Url | Method | Description | Angular Service |
| --- | --- | --- | --- | --- |
| services.countries.all | http://localhost:3000/countries | GET | List of countries | CountriesService |

<br>
<br>


### Country page services 

This services are used to get data in country page:

| Environment key | Url | Method | Description | Angular Service |
| --- | --- | --- | --- | --- |
| services.countries.info | http://localhost:3000/countries/PHL | GET | Country info detail | CountriesService |
| services.species.all | http://localhost:3000/species | GET | List of species | SpeciesService |
| services.species.edit | http://localhost:3000/species/MIL | PUT | Edit species | SpeciesService |

<br>
<br>


### Species page services 

This services are used to get data in species page:

| Environment key | Url | Method | Description | Angular Service |
| --- | --- | --- | --- | --- |
| services.species.info | http://localhost:3000/species/MIL | GET | Species info detail | SpeciesService |
| services.ftypes.all | http://localhost:3000/ftypes | GET | List of ftypes | FtypesService |
| services.ftypes.edit | http://localhost:3000/ftypes/Strains%201 | PUT | Edit ftypes | FtypesService |

<br>
<br>


### Ftype page services 

This services are used to get data in ftype page:

| Environment key | Url | Method | Description | Angular Service |
| --- | --- | --- | --- | --- |
| services.ftypes.info | http://localhost:3000/ftypes/Strains%201 | GET | Ftype info detail | FtypesService |
| services.ftypes.all | http://localhost:3000/ftypes | GET | List of ftypes | FtypesService |
| services.ftypes.edit | http://localhost:3000/ftypes/Strains%201 | PUT | Edit ftypes | FtypesService |

<br>
<br>




## Services responses

Below are the services responses divided per service.

Note: all the parameter starting with "_" are used in the dev environment to have the search functionality with json_server but they are not needed in production.


<br>
<br>

### Countries response (GET)


| REST param | Type | Description |
| --- | --- | --- |
| --- | --- | --- |


```json
[
    {
        "id": "AFG",
        "nameEn": "Afghanistan",
        "iso3": "AFG",
        "continent": "Asia",
        "region": "Southern Asia",
        "species": 2,
        "ftypes": 5,
        "sftypes": 0,
        "lastUploadDate": "2020-03-31T14:55:04Z",
        "status": "accepted",
        "natfocal": "Fabrizio Antonangeli"
    },
]
```

<br>
<br>

### Country-info response (GET)



```json
{
        "id": "AFG",
        "nameEn": "Afghanistan",
        "iso3": "AFG",
        "continent": "Asia",
        "region": "Southern Asia",
        "species": 2,
        "ftypes": 5,
        "sftypes": 0,
        "lastUploadDate": "2020-03-31T14:55:04Z",
        "status": "accepted",
        "natfocal": "Fabrizio Antonangeli"
}
```

<br>
<br>

### Species response (GET)


| REST param | Type | Description |
| --- | --- | --- |
| country_like | string | The country name |


```json
[
    {
        "id": "EMA",
        "name": "Kappaphycus alvarezii",
        "ftypes": 12,
        "sftypes": 0,
        "native_CM": "Yes",
        "alphaCode": "EMA",
        "lastModifiedDate": "2020-03-27T14:55:04Z",
        "status": "new",
        "taxonomy": "Aquatic plants",
        "country": "Philippines",
        "comments": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa",
        "addinformant_CM": "Fabrizio Antonangeli",
        "cse_CM": "Milkfish",
        "risks_CM": "No",
        "risksdetail_CM": "Lorem ipsum dolor sit amet",
        "mainuse_CM": "Fish feed",
        "wre_CM": "Yes",
        "cultureSystem_CM": "Pond - Semi-intensive",
        "ProdAmt_CM": 123,
        "prodVal_CM": 321,
        "prodTrend_CM": "Stable",
        "futTrend_CM": "Stopped"
    },
]
```

<br>
<br>

### Species response (PUT)


```json
{
        "id": "EMA",
        "name": "Kappaphycus alvarezii",
        "ftypes": 12,
        "sftypes": 0,
        "native_CM": "Yes",
        "alphaCode": "EMA",
        "lastModifiedDate": "2020-03-27T14:55:04Z",
        "status": "new",
        "taxonomy": "Aquatic plants",
        "country": "Philippines",
        "comments": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa",
        "addinformant_CM": "Fabrizio Antonangeli",
        "cse_CM": "Milkfish",
        "risks_CM": "No",
        "risksdetail_CM": "Lorem ipsum dolor sit amet",
        "mainuse_CM": "Fish feed",
        "wre_CM": "Yes",
        "cultureSystem_CM": "Pond - Semi-intensive",
        "ProdAmt_CM": 123,
        "prodVal_CM": 321,
        "prodTrend_CM": "Stable",
        "futTrend_CM": "Stopped"
}
```

<br>
<br>

### Species-info response (GET/PUT)


```json
{
        "id": "EMA",
        "name": "Kappaphycus alvarezii",
        "ftypes": 12,
        "sftypes": 0,
        "native_CM": "Yes",
        "alphaCode": "EMA",
        "lastModifiedDate": "2020-03-27T14:55:04Z",
        "status": "new",
        "taxonomy": "Aquatic plants",
        "country": "Philippines",
        "comments": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa",
        "addinformant_CM": "Fabrizio Antonangeli",
        "cse_CM": "Milkfish",
        "risks_CM": "No",
        "risksdetail_CM": "Lorem ipsum dolor sit amet",
        "mainuse_CM": "Fish feed",
        "wre_CM": "Yes",
        "cultureSystem_CM": "Pond - Semi-intensive",
        "ProdAmt_CM": 123,
        "prodVal_CM": 321,
        "prodTrend_CM": "Stable",
        "futTrend_CM": "Stopped"
}
```

<br>
<br>

### Ftypes response (GET)


| REST param | Type | Description |
| --- | --- | --- |
| country_like | string | The country name |
| species_like | string | The species name |
| _ftypeParent_like | string | The parent ftype name |


```json
[
    {
        "id": "Strains 1",
        "name": "Strains 1",
        "sftypes": 21,
        "lastModifiedDate": "2020-03-06T14:55:04Z",
        "status": "pending",
        "ftypeCategory": "Strains",
        "_ftypeParent": "null",
        "species": "Chanos chanos",
        "country": "Philippines",
        "comments": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa",
        "EstValVar_P": "9,0",
        "NatRegVar_P": "Yes",
        "OrigVar_P": "Native",
        "RegDetails_P": "",
        "RegVar_P": "",
        "SpecCompListVar_P": 9,
        "SpecCompVar_P": 9,
        "VarBreedHis_P": "",
        "VarBreedgen_P": "No",
        "VarBreeding_P": 9,
        "VarBreedref_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "VarCarcass_P": "",
        "VarDesc_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "VarDistComments_P": "",
        "VarDomestication_P": "",
        "VarFitness_P": "",
        "VarFlesh_P": "",
        "VarGenetic_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "VarName_P": "Strains 1",
        "VarProdPerf_P": "",
        "VarPropDet_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "VarQualPheno_P": "",
        "VarQuanPerf_P": "",
        "VarRegDetails_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "VarRes_P": "Fabrizio Antonangeli",
        "VarSou_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Varexport_P": "Yes",
        "Varexportdetail_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Varherch_P": "Yes",
        "Varmethod_P": 9,
        "Varriskdetails_P": 9,
        "Varrisks_P": "No data",
        "culturesSystemper_P": "7,0",
        "estProdVar_P": "7,0",
        "isIntroduced": "No data",
        "useSpeciesVar_P": "Human food consumption",
        "usepurposeratVar_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
]
```

<br>
<br>

### Ftypes response (PUT)


```json
{
    "id": "Strains 1",
    "name": "Strains 1",
    "sftypes": 21,
    "lastModifiedDate": "2020-03-06T14:55:04Z",
    "status": "pending",
    "ftypeCategory": "Strains",
    "_ftypeParent": "null",
    "species": "Chanos chanos",
    "country": "Philippines",
    "comments": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa",
    "EstValVar_P": "9,0",
    "NatRegVar_P": "Yes",
    "OrigVar_P": "Native",
    "RegDetails_P": "",
    "RegVar_P": "",
    "SpecCompListVar_P": 9,
    "SpecCompVar_P": 9,
    "VarBreedHis_P": "",
    "VarBreedgen_P": "No",
    "VarBreeding_P": 9,
    "VarBreedref_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "VarCarcass_P": "",
    "VarDesc_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "VarDistComments_P": "",
    "VarDomestication_P": "",
    "VarFitness_P": "",
    "VarFlesh_P": "",
    "VarGenetic_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "VarName_P": "Strains 1",
    "VarProdPerf_P": "",
    "VarPropDet_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "VarQualPheno_P": "",
    "VarQuanPerf_P": "",
    "VarRegDetails_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "VarRes_P": "Fabrizio Antonangeli",
    "VarSou_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Varexport_P": "Yes",
    "Varexportdetail_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Varherch_P": "Yes",
    "Varmethod_P": 9,
    "Varriskdetails_P": 9,
    "Varrisks_P": "No data",
    "culturesSystemper_P": "7,0",
    "estProdVar_P": "7,0",
    "isIntroduced": "No data",
    "useSpeciesVar_P": "Human food consumption",
    "usepurposeratVar_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}
```

<br>
<br>

### Ftype-info response (GET/PUT)


```json
{
    "id": "Strains 1",
    "name": "Strains 1",
    "sftypes": 21,
    "lastModifiedDate": "2020-03-06T14:55:04Z",
    "status": "pending",
    "ftypeCategory": "Strains",
    "_ftypeParent": "null",
    "species": "Chanos chanos",
    "country": "Philippines",
    "comments": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa",
    "EstValVar_P": "9,0",
    "NatRegVar_P": "Yes",
    "OrigVar_P": "Native",
    "RegDetails_P": "",
    "RegVar_P": "",
    "SpecCompListVar_P": 9,
    "SpecCompVar_P": 9,
    "VarBreedHis_P": "",
    "VarBreedgen_P": "No",
    "VarBreeding_P": 9,
    "VarBreedref_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "VarCarcass_P": "",
    "VarDesc_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "VarDistComments_P": "",
    "VarDomestication_P": "",
    "VarFitness_P": "",
    "VarFlesh_P": "",
    "VarGenetic_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "VarName_P": "Strains 1",
    "VarProdPerf_P": "",
    "VarPropDet_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "VarQualPheno_P": "",
    "VarQuanPerf_P": "",
    "VarRegDetails_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "VarRes_P": "Fabrizio Antonangeli",
    "VarSou_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Varexport_P": "Yes",
    "Varexportdetail_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Varherch_P": "Yes",
    "Varmethod_P": 9,
    "Varriskdetails_P": 9,
    "Varrisks_P": "No data",
    "culturesSystemper_P": "7,0",
    "estProdVar_P": "7,0",
    "isIntroduced": "No data",
    "useSpeciesVar_P": "Human food consumption",
    "usepurposeratVar_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}
```


<br>
<br>

## JSON properties list

To avoid different property names and use always the same style here is a sorted list of all the properties of all the JSONs. The properties are alphabetically sorted.

Note: the id property is needed by json_server to build the endpoints for the dev environment, but not really needed in the production environment.

```json
{
    "EstValVar_P": "9,0",
    "NatRegVar_P": "Yes",
    "OrigVar_P": "Native",
    "ProdAmt_CM": 123,
    "RegDetails_P": "",
    "RegVar_P": "",
    "SpecCompListVar_P": 9,
    "SpecCompVar_P": 9,
    "VarBreedHis_P": "",
    "VarBreedgen_P": "No",
    "VarBreeding_P": 9,
    "VarBreedref_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "VarCarcass_P": "",
    "VarDesc_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "VarDistComments_P": "",
    "VarDomestication_P": "",
    "VarFitness_P": "",
    "VarFlesh_P": "",
    "VarGenetic_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "VarName_P": "Strains 1",
    "VarProdPerf_P": "",
    "VarPropDet_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "VarQualPheno_P": "",
    "VarQuanPerf_P": "",
    "VarRegDetails_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "VarRes_P": "Fabrizio Antonangeli",
    "VarSou_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Varexport_P": "Yes",
    "Varexportdetail_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Varherch_P": "Yes",
    "Varmethod_P": 9,
    "Varriskdetails_P": 9,
    "Varrisks_P": "No data",
    "_ftypeParent": "Strains 1",
    "addinformant_CM": "Fabrizio Antonangeli",
    "alphaCode": "EMA",
    "comments": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa",
    "continent": "Asia",
    "country": "Philippines",
    "cse_CM": "Milkfish",
    "cultureSystem_CM": "Pond - Semi-intensive",
    "culturesSystemper_P": "7,0",
    "estProdVar_P": "7,0",
    "ftypeCategory": "Strains",
    "ftypes": 12,
    "futTrend_CM": "Stopped"
    "id": "AFG",
    "isIntroduced": "No data",
    "iso3": "AFG",
    "lastModifiedDate": "2020-03-06T14:55:04Z",
    "lastUploadDate": "2020-03-31T14:55:04Z",
    "mainuse_CM": "Fish feed",
    "name": "Hybrids 1",
    "nameEn": "Afghanistan",
    "natfocal": "Fabrizio Antonangeli"
    "native_CM": "Yes",
    "prodTrend_CM": "Stable",
    "prodVal_CM": 321,
    "region": "Southern Asia",
    "risks_CM": "No",
    "risksdetail_CM": "Lorem ipsum dolor sit amet",
    "sftypes": 0,
    "species": "Chanos chanos",
    "status": "accepted",
    "taxonomy": "Aquatic plants",
    "useSpeciesVar_P": "Human food consumption",
    "usepurposeratVar_P": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    "wre_CM": "Yes",
}
```

<br>
<br>

