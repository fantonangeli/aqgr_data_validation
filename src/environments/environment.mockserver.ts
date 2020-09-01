const baseUrl="http://localhost:3000/";
const dataPath="assets/data/";
const countriesPath=baseUrl+"countries/";
const homePath=baseUrl+"home/";
const speciePath=baseUrl+"specie/";
const ftypePath=baseUrl+"ftype/";
const countryPath=baseUrl+"country/";

export const environment = {
    production: false,
    logging:true,

    /**
     * default date format used to format dates
     */
    defaultDateFormat:'dd/MM/yyyy hh:mm',

    services:{
        countries:{
            all:baseUrl+"countries"
        },
        country:{
            info:baseUrl+"country-info",
            species:baseUrl+"species",
        },
        specie:{
            info:baseUrl+"specie-info",
            ftypes:baseUrl+"ftypes",
        },
        ftype:{
            info:baseUrl+"ftype-info",
        },
        params: {
            country:"_country_like",
            alphaCode:"alphaCode_like",
            specie:"_specie_like",
            ftype:"_ftypeParent_like",
            sftype:"sftype_like",
            limit:"_limit",
            sortBy:"_sort"
        },
    },

    /**
     * statuses of the records
     */
    statuses:{
        accepted:"accepted",
        rejected:"rejected",
        new:"new",
        pending:"pending"
    }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
