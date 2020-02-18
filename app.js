/**Object destructuring 1
 * Answer: 
 * 1. 8
 * 2. 1846
 */
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?


/** Object destructuring 2
 * Answer: {   yearsNeptuneDiscovered: 1846, 
 *             yearMarsDiscovered: 1659   };
 */
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // ?


/** Object destructuring 3
 * Answer: 
 * 1. Your name is Alejandro and you like purple
 * 2. Your name is Melissa and you like green
 * 3. Your name is undefined and you like green
 */
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
  getUserData({firstName: "Melissa"}) // ?
  getUserData({}) // ?


/** Array destructuring 1
 * Answer:
 * 1. Maya
 * 2. Marisa
 * 3. Chi
 */
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
console.log(second); // ?
console.log(third); // ?


/**Array destructuring 2
 * Answer:
 * 1.  "Raindrops on roses"
 * 2.  "whiskers on kittens"
 * 3.  "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
*/
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // ?
  console.log(whiskers); // ?
  console.log(aFewOfMyFavoriteThings); // ?


/**Array destructuring 3
 * Answer:
 * 1. [10, 30, 20]
 */
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ?


/**ES5 Assigning variables to Object properties */
const obj = {
    numbers : {
        a: 1,
        b: 2,
    }
};
let {value1, value2} = obj.numbers;

/**ES5 One-line array swap with destructuring */
const arr = [1,2];
[arr[0], arr[1]] = [arr[1], arr[0]];

/**raceResults() */
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']);

let raceResults = ([first, second, third, ...rest])  => ({first, second, third, rest});