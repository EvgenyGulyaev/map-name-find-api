# map-name-find-api
Basic library for Country, State and City  Data taken from:https://github.com/hiiamrohit/Countries-States-Cities-database

# Installation
npm:    
`npm install map-name-find-api --save`     

yarn:     
`yarn add map-name-find-api`     

# Methods

## getData
```
Get All data from https://github.com/hiiamrohit/Countries-States-Cities-database
const API = require('map-name-find-api')
const data = API.getData();
console.log(data)
```

## getCitiesData
```
Get cities data from https://github.com/hiiamrohit/Countries-States-Cities-database
const API = require('map-name-find-api')
const data = API.getCitiesData();
console.log(data)
```

## getCountriesData
```
Get countries data from https://github.com/hiiamrohit/Countries-States-Cities-database
const API = require('map-name-find-api')
const data = API.getCountriesData();
console.log(data)
```

## getStatesData
```
Get states data from https://github.com/hiiamrohit/Countries-States-Cities-database
const API = require('map-name-find-api')
const data = API.getCountriesData();
console.log(data)
```

## getElementFromAllDataByName
```
Find element from all data by name(string) 
@params name

For example:   
const API = require('map-name-find-api')
const data = API.getElementFromAllDataByName('Taganrog');
console.log(data)

```

## getCities
```
Find cities from cities data by predicate as array 
@params [value, field], @default  field = state_id    
field can be  'state_id', 'name', 'id'

For example:   
const API = require('map-name-find-api')
const data = API.getCities(['805', 'state_id']); // or API.getCities(['805']);
console.log(data)
```

## getCountry
```
Find country from countries data by predicate as array 
@params [value, field], @default  field = sortname     
field can be  'id', 'sortname', 'name' , 'phoneCode' 

For example:   
const API = require('map-name-find-api')
const data = API.getCountry(['Afghanistan', 'sortname']); // or API.getCountry(['Afghanistan']);
console.log(data)
```

## getStates
```
Find state from states data by predicate as array 
@params [value, field], @default  field = country_id     
field can be  'id', 'name', 'country_id'

For example:   
const API = require('map-name-find-api')
const data = API.getStates(['101', 'country_id']); // or API.getStates(['101']);
console.log(data)
```


