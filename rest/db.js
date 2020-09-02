const countries = require("../src/assets/data/countries/countries.json");
const countryInfo = require("../src/assets/data/countries/country-info.json");
const species = require("../src/assets/data/species/species.json");
const specieInfo = require("../src/assets/data/species/specie-info.json");
const ftypes = require("../src/assets/data/ftypes/ftypes.json");
const ftypeInfo = require("../src/assets/data/ftypes/ftype-info.json");

module.exports = () => ({
    "country-info":countryInfo,
    countries,
    species,
    ftypes,
    "specie-info":specieInfo,
    "ftype-info":ftypeInfo
});


