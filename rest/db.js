const countries = require("../src/assets/data/countries/countries.json");
const countryInfo = require("../src/assets/data/country/country-info.json");
const species = require("../src/assets/data/country/species.json");
const ftypes = require("../src/assets/data/specie/ftypes.json");
const sftypes = require("../src/assets/data/ftype/sftypes.json");
const specieInfo = require("../src/assets/data/specie/specie-info.json");
const ftypeInfo = require("../src/assets/data/ftype/ftype-info.json");

module.exports = () => ({
    "country-info":countryInfo,
    countries,
    species,
    ftypes,
    "specie-info":specieInfo,
    "ftype-info":ftypeInfo
});


