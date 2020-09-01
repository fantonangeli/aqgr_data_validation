// const baseUrl="http://localhost:3000/";
const dataPath="assets/data/";
const countriesPath=dataPath+"countries/";
const homePath=dataPath+"home/";
const speciePath=dataPath+"specie/";
const ftypePath=dataPath+"ftype/";
const countryPath=dataPath+"country/";

export const environment = {
    production: false,
    logging:true,

    /**
     * default date format used to format dates
     */
    defaultDateFormat:'dd/MM/yyyy hh:mm',

    services:{
        countries:{
            all:countriesPath+"countries.json"
        },
        country:{
            info:countryPath+"country-info.json",
            species:countryPath+"species.json",
        },
        specie:{
            info:speciePath+"specie-info.json",
            ftypes:speciePath+"ftypes.json",
        },
        ftype:{
            info:ftypePath+"ftype-info.json",
        },
        params: {
            country:"country_like",
            alphaCode:"alphaCode_like",
            specie:"specie_like",
            ftype:"ftype_like",
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
