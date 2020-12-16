const dataPath="./data/";

const countries = require(dataPath+"countries/countries.json");
const species = require(dataPath+"species/species.json");
const ftypes = require(dataPath+"ftypes/ftypes.json");

module.exports = () => ({
    countries,
    species,
    ftypes,
});


