// 1. ARRAY destructuring

const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp'];

const [gold, silver, bronze] = raceResults;
gold; // 'Eliud Kipchoge'
silver; // 'Feyisa Lelisa'
bronze; // 'Galen Rupp'

const [fastest, ...everyoneElse] = raceResults;
fastest; // 'Eliud Kipchoge'
everyoneElse; // ['Feyisa Lelisa', 'Galen Rupp']

// 2. OBJECT destructuring
const runner = {
  first: 'Eliud',
  last: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya',
};

const { first, last, country } = runner;

first; // 'Eliud'
last; // 'Kipchoge'
country; // 'Kenya'

// To change name for a new var (from runner.first value goes to new var 'firstName'):
const { first: firstName } = runner;

firstName; // 'Eliud'

// Default Value
const { country: countryOfOrigin = 'N/A' } = runner; // get value from runner.country, copy it to countryOfOrigin, and if it's not defined - use string 'N/A' instead

// 3. PARAM Destructuring

const fullName = ({ first, last = 'asdasd' }) => {
  return `${first} ${last}`; // instead of passing (user) and returning `${user.first} ${user.last}`. asdasd - as default value for 'last' var
};

fullName(runner); // 'Eliud Kipchoge'
