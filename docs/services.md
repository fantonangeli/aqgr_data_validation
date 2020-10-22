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
    + [Species response (POST)](#species-response-post)
    + [Species-info response (GET/POST)](#species-info-response-getpost)
    + [Ftypes response (GET)](#ftypes-response-get)
    + [Ftypes response (POST)](#ftypes-response-post)
    + [Ftype-info response (GET/POST)](#ftype-info-response-getpost)
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
| services.countries.info | http://localhost:3000/country-info/PHL | GET | Country info detail | CountryInfoService |
| services.species.all | http://localhost:3000/species | GET | List of species | SpeciesService |
| services.species.edit | http://localhost:3000/species | POST | Edit species | SpeciesService |

<br>
<br>


### Species page services 

This services are used to get data in species page:

| Environment key | Url | Method | Description | Angular Service |
| --- | --- | --- | --- | --- |
| services.species.info | http://localhost:3000/species-info/MIL | GET | Species info detail | SpecieInfoService |
| services.species.infoEdit | http://localhost:3000/species-info/MIL | POST | Species info edit | SpecieInfoService |
| services.ftypes.all | http://localhost:3000/ftypes | GET | List of ftypes | FtypesService |
| services.ftypes.edit | http://localhost:3000/ftypes | POST | Edit ftypes | FtypesService |

<br>
<br>


### Ftype page services 

This services are used to get data in ftype page:

| Environment key | Url | Method | Description | Angular Service |
| --- | --- | --- | --- | --- |
| services.ftypes.info | http://localhost:3000/ftype-info/Strains%201 | GET | Ftype info detail | FtypeInfoService |
| services.ftypes.all | http://localhost:3000/ftypes | GET | List of ftypes | FtypesService |
| services.ftypes.edit | http://localhost:3000/ftypes | POST | Edit ftypes | FtypesService |

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
      "lastUploadDate": "2020-03-20T14:55:04Z",
      "status": "accepted"
    },
]
```

<br>
<br>

### Country-info response (GET)



```json
{
  "id": "PHL",
  "nameEn": "Philippines",
  "iso3": "PHL"
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
      "native": true,
      "alphaCode": "EMA",
      "lastModifiedDate": "2020-03-11T14:55:04Z",
      "status": "accepted",
      "taxonomy": "Aquatic plants",
      "_country": "Philippines"
    },
]
```

<br>
<br>

### Species response (POST)


```json
{
  "id": "EMA",
  "name": "Kappaphycus alvarezii",
  "ftypes": 12,
  "sftypes": 0,
  "native": true,
  "alphaCode": "EMA",
  "lastModifiedDate": "2020-03-11T14:55:04Z",
  "status": "accepted",
  "taxonomy": "Aquatic plants",
  "_country": "Philippines"
}
```

<br>
<br>

### Species-info response (GET/POST)


```json
{
  "id": "MIL",
  "name": "Chanos chanos",
  "alphaCode": "MIL",
  "native": true
}
```

<br>
<br>

### Ftypes response (GET)


| REST param | Type | Description |
| --- | --- | --- |
| species_like | string | The species name |
| ftypeParent_like | string | The parent ftype name |


```json
[
    {
      "id": "Strains 1",
      "name": "Strains 1",
      "ftypes": 21,
      "lastModifiedDate": "2020-03-25T14:55:04Z",
      "status": "pending",
      "ftypeCategory": "Strains",
      "_ftypeParent": "null",
      "_species": "Chanos chanos"
    },
]
```

<br>
<br>

### Ftypes response (POST)


```json
{
  "id": "Strains 1",
  "name": "Strains 1",
  "ftypes": 21,
  "lastModifiedDate": "2020-03-25T14:55:04Z",
  "status": "pending",
  "ftypeCategory": "Strains",
  "_ftypeParent": "null",
  "_species": "Chanos chanos"
}
```

<br>
<br>

### Ftype-info response (GET/POST)


```json
{
  "id": "Strains 1",
  "name": "Strains 1"
}
```


<br>
<br>

## JSON properties list

To avoid different property names and use always the same style here is a sort the list of all the properties of all the JSONs. The properties are alphabetically sorted.

Note: the id property is needed by json_server to build the endpoints for the dev environment, but not really needed in the production environment.

```json
{
      "alphaCode": "EMA",
      "continent": "Asia",
      "ftypeCategory": "Strains",
      "ftypes": 5,
      "id": "PHL",
      "iso3": "PHL"
      "lastModifiedDate": "2020-03-11T14:55:04Z",
      "lastUploadDate": "2020-03-20T14:55:04Z",
      "name": "Kappaphycus alvarezii",
      "nameEn": "Philippines",
      "native": true,
      "region": "Southern Asia",
      "sftypes": 0,
      "species": 2,
      "status": "accepted"
      "taxonomy": "Aquatic plants",
}
```

<br>
<br>

