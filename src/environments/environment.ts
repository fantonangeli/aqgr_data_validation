const baseUrl="http://localhost:3000/";

/* TODO: put labels in a config */

export const environment = {
    production: false,
    logging:true,

    /**
     * default numeric format used to format numbers
     */
    defaultNumberFormat:'1.0-2',

    /**
     * default date format used to format dates
     */
    defaultDateFormat:'dd-MMM-yyyy',

    services:{
        countries:{
            all:baseUrl+"countries",
            info:baseUrl+"country-info",
        },
        species:{
            all:baseUrl+"species",
            info:baseUrl+"species-info",
            infoEdit:(id)=>`${baseUrl}species-info/${id}`,
            edit:(id)=>`${baseUrl}species/${id}`,
        },
        ftypes:{
            all:baseUrl+"ftypes",
            edit:(id)=>`${baseUrl}ftypes/${id}`,
            info:baseUrl+"ftype-info",
            infoEdit:(id)=>`${baseUrl}ftype-info/${id}`,
        },
        params: {
            country:"_country_like",
            alphaCode:"alphaCode_like",
            specie:"_species_like",
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
        published:"published",
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
