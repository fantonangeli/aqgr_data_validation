const dataPath="./data/";

const countries = require(dataPath+"countries/countries.json");
const countryInfo = require(dataPath+"countries/country-info.json");
const species = require(dataPath+"species/species.json");
const specieInfo = require(dataPath+"species/specie-info.json");
const ftypes = require(dataPath+"ftypes/ftypes.json");
const ftypeInfo = require(dataPath+"ftypes/ftype-info.json");

module.exports = () => ({
    "country-info":countryInfo,
    countries,
    species,
    ftypes,
    "specie-info":specieInfo,
    "ftype-info":ftypeInfo
});


