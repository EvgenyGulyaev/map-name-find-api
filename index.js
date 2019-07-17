const
  _find = require('lodash.find'),
  _filter = require('lodash.filter'),
  { cities } = require('./cities'),
  { countries } = require('./countries'),
  { states } = require('./states')
;

const data = [...cities, ...countries, ...states];

class SearchAPI {

  static getData() {
    return data;
  }

  static getCitiesData() {
    return cities
  }

  static getCountriesData() {
    return countries
  }

  static getStatesData() {
    return states
  }

  static getElementFromAllDataByName(name = 'Taganrog') {
    return _find(data, ['name', name])
  }

  static getCities([value, field = 'state_id']) {
    return _filter(cities, [field, value])
  }

  static getCountry([value, field = 'sortname']) {
    return _find(countries, [field, value])
  }

  static getStates([value, field = 'country_id']) {
    return _filter(states, [field, value])
  }
}

module.exports = SearchAPI;
