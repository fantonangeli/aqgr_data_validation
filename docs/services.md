# AqGR Data Validation Services

Here is the documentation of the REST services used in AqGR Data Validation project.


## Home page services 

This services are used to get data in home page

| Environment key | Url | Description | Format | Angular Service |
| --- | --- | --- | --- | --- |


# Services Parameters

These parameters are accepted by all services of this project under the SearchServiceParams class and the parameter names sent to the REST services are configured in environment.services.params

| Key | REST param | Type | Description |
| --- | --- | --- | --- |
| continent | continent_like | string | The continent name |
| region | region_like | string | The region name |
| country | country_like | string | The country name |
| taxonomy | taxonomy_like | string | The taxonomy name |
| specie | specie_like | string | The specie name |
| ftype | ftype_like | string | The primary ftype |
| sftype | sftype_like | string | The secondary ftype |
| search | key_like | string | Free text to search by name |
| limit | _limit | number | Used to limit the number of results |
| sortBy | _sort | string | The field as string to sort by |

<br>
<br>

# JSON properties list

To avoid different property names and use always the same style here is a sort the list of all the properties of all the JSONs.   
Note: Only properties from the services used for tables are not written here.

```json
{
    "continents": [],
    "nameEn": "Asia",
    "species": 88,
    "ftypes": 894,
    "sftypes": 808,
    "regions": [],
    "countries": [],
    "iso3": "BGD",
}
```

<br>
<br>

# JSON data formats

These are the defined formats for the JSON responses. 





## Data format

This is not a defined format and is used mainly in dynamic text. 
Below some example:
```json
```  


## Tree table data format

This is not a defined format and is used mainly in dynamic text. 
Below some example:

```json
```  



