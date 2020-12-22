const baseUrl="https://aqgr-dv-demo-rest.herokuapp.com/";
const assetsPath="assets/";

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
            info:baseUrl+"countries",
        },
        species:{
            all:baseUrl+"species",
            info:baseUrl+"species",
            edit:(id)=>`${baseUrl}species/${id}`,
        },
        ftypes:{
            all:baseUrl+"ftypes",
            edit:(id)=>`${baseUrl}ftypes/${id}`,
            info:baseUrl+"ftypes",
        },
        params: {
            country:"country_like",
            alphaCode:"alphaCode_like",
            specie:"species_like",
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
    },

    paths:{
        i18n:assetsPath+"i18n",
    }

};
