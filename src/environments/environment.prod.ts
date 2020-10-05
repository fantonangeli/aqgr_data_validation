const baseUrl="https://aqgr-dv-demo-rest.herokuapp.com/";
// const dataPath="assets/data/";
// const countriesPath=dataPath+"countries/";
// const speciesPath=dataPath+"species/";
// const ftypesPath=dataPath+"ftypes/";

export const environment = {
    production: true,
    logging:true,

    /**
     * default date format used to format dates
     */
    defaultDateFormat:'dd/MM/yyyy hh:mm',

    services:{
        countries:{
            all:baseUrl+"countries",
            info:baseUrl+"country-info",
        },
        species:{
            all:baseUrl+"species",
            info:baseUrl+"specie-info",
            edit:(id)=>`${baseUrl}species/${id}`,
        },
        ftypes:{
            all:baseUrl+"ftypes",
            edit:(id)=>`${baseUrl}ftypes/${id}`,
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
        published:"published",
        new:"new",
        pending:"pending"
    }

};
