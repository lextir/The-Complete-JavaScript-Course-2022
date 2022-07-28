'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive`)

// const interface = `Audio`;

// function logger() {
//   console.log(`My name is Lex`)
// }

//  calling / running / invoking the function
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice); // Juice with with 5 apples and 0 oranges

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

//* LECTURE: Functions

// function describeCountry(country, population, capitalCity) {
//   const str = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return str;
// }

// const holland = describeCountry(`Holland`, 17, `Amsterdam`);
//onst germany = describeCountry(`Germany`, 84, `Berlin`);
// const belgium = describeCountry(`Belgium`, 11, `Brussels`);
// console.log(holland);
// console.log(germany);
// console.log(belgium);

//* Function Declarations vs. Expressions

//* Function Declaration, shorter way:

// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

//* Function Expression
// const calcAge2 = function(birthYear) {
//   return 2022 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2)

//* LECTURE: Function Declarations vs. Expressions

//* Function Declaration
// function percentageOfWOrld1(population) {
//   return (population / 7900) * 100;
// }

// const china = percentageOfWOrld1(1441);
// const germany = percentageOfWOrld1(84);
// const holland = percentageOfWOrld1(17);
// console.log(china);
// console.log(germany);
// console.log(holland);

//* Function Expression
// const percentageOfWorld2 = function(population) {
//   return (population / 7900) * 100;
// }

// const china2 = percentageOfWorld2(1441);
// const germany2 = percentageOfWorld2(84);
// const holland2 = percentageOfWorld2(17);
// console.log(china2);
// console.log(germany2);
// console.log(holland2);

//* Arrow Function

//* one line-function:
// const calcAge3 = birthYear => 2022 - birthYear;

// const age3 = calcAge3(1991);
// console.log(age3);

//* multiple line-function
// const yearsUntilRetirement = birthYear => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return retirement; // return keyword is required when there is more than 1 line
// }

// console.log(yearsUntilRetirement(1991));

//* multiple paramameter-function
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, `Jonas`));

//* LECTURE: Arrow Functions
// const percentageOfWOrld3 = population => (population / 7900) * 100;
// const china = percentageOfWOrld3(1441);
// console.log(china);

//*  Functions Calling Other Functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   return `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
// }

// console.log(fruitProcessor(2,3));

//* LECTURE: Functions Calling Other Functions

// function percentageOfWOrld1(population) {
//   return (population / 7900) * 100;
// }

// function describePopulation(country, population) {
//   const percentage = percentageOfWOrld1(population);
//   return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
// }

// const china = describePopulation(`China`, 1441);
// const germany = describePopulation(`Germany`, 84);
// const holland = describePopulation(`Holland`, 17);
// console.log(china)
// console.log(germany)
// console.log(holland)

//* Reviewing Functions

// const calcAge = function(birthYear) {
//   return 2022 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
//   // return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, `Jonas`));
// console.log(yearsUntilRetirement(1950, `Mike`));

//* Coding Challenge 1

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// }

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 40);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`Nobody wins`);
//   }
// }

// checkWinner(avgDolphins, avgKoalas);

//* Arrays

// const years = new Array(1991, 194, 1979, 2022);
// console.log(years);

// const friends = [`Michael`, `Steven`, `Peter`];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]); // get the last array item

// friends[2] = `Jay;` // change array item.
// console.log(friends);

// const firstName = `Jonas`;
// const jonas = [firstName, `Ti`, 2022 - 1991, `teacher`, friends]; // you can include variables and other arrays too
// console.log(jonas);

// Exercise
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge2(years[0]);
// const age2 = calcAge2(years[1]);
// const age3 = calcAge2(years[years.length - 1]);
// console.log(age1,age2,age3)

// const ages = [age1, age2, age3];
// console.log(ages);

// //* LECTURE: Introduction to Arrays

// const populations = [84, 17, 1441, 11];
// console.log(populations.length === 4);

// function percentageOfWOrld1(population) {
//   return (population / 7900) * 100;
// }

// const pop1 = percentageOfWOrld1(populations[0]);
// const pop2 = percentageOfWOrld1(populations[1]);
// const pop3 = percentageOfWOrld1(populations[2]);
// const pop4 = percentageOfWOrld1(populations[populations.length - 1]);

// const percentages = [pop1,pop2,pop3,pop4];
// console.log(percentages);

//* Basic Array Operations (Methods)

// const friends = [`Michael`, `Steven`, `Peter`];

// //* Add elements
// friends.push(`Jay`); // add to end
// console.log(friends);

// friends.unshift(`John`); // add to beginning
// console.log(friends);

// //* Remove elements
// friends.pop(); // remove last
// console.log(friends);

// friends.shift(); //  remove first
// console.log(friends);

// //* Find index number of item
// console.log(friends.indexOf(`Steven`));

// //* Check if array includes item (boolean)
// console.log(friends.includes(`Steven`));

// if (friends.includes(`Steven`)) {
//   console.log(`You have a friend called Steven`);
// }

//* LECTURE: Basic Array Operations (Methods)

// const neighbors = [`Germany`, `Belgium`, `Luxemburg`];

// neighbors.push(`Utopia`);
// console.log(neighbors);

// neighbors.pop(`Utopia`);
// console.log(neighbors);

// if (neighbors.includes(!`Germany`)) {
//   console.log(`Probably not a central European country`)
// } else {
//   console.log(`It is a central European country`)
// }

// neighbors[0] = `Duitsland`;
// console.log(neighbors);

//* Coding Challenge #2

// function calcTip(bill) {
//   return bill > 50 && bill < 300 ? bill * .15 : bill * .20;
// }

// const bills = [125, 555, 44]

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

//* Introduction to Objects

//* Object literal
// const lex = {
//   firstName: `Lex`,
//   lastName: `Tira`,
//   age: 2022 - 1979,
//   job: `webdev`,
//   friends: [`Michael`, `Peter`, `Steven`]
// }

//* LECTURE: Introduction to Objects

// const myCountry = {
//   country: `Holland`,
//   capital: `Amsterdam`,
//   language: `Dutch`,
//   population: 17,
//   neighbors: [`Germany`, `Belgium`, `Luxemburg`]
// }

//* Dot vs. Bracket Notation

//* Object literal
// const lex = { // object
//   firstName: `Lex`, // property : value
//   lastName: `Tira`,
//   age: 2022 - 1979,
//   job: `webdev`,
//   friends: [`Michael`, `Peter`, `Steven`]
// }

// console.log(lex);

// console.log(lex.lastName); // dot notation
// console.log(lex[`lastName`]); // bracket notation (with quotes!). use when you first need to compute the property name

//* Example of bracket notation
// const interestedIn = prompt(`What do you want to know about Lex? Choose between firstName, lastName, age, job and friends`);

// if (lex[interestedIn]) {
//   console.log(lex[interestedIn]);
// } else {
//   console.log(`Wrong request. Choose between firstName, lastName, age, job and friends`)
// }

// Add property and value
// lex.hobby = `reading`;
// console.log(lex);

// console.log(`${lex.firstName} has ${lex.friends.length} friends, and his best friend is ${lex.friends[0]}`);

//* LECTURE: Dot vs. Bracket Notation

// const myCountry = {
//   country: `Holland`,
//   capital: `Amsterdam`,
//   language: `Dutch`,
//   population: 17,
//   neighbors: [`Germany`, `Belgium`, `Luxemburg`]
// }

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a captial called ${myCountry.capital}`)

// myCountry.population += 2;
// myCountry[`population`] -= 2;
// console.log(myCountry.population);

//* Object Methods

// const lex = { // object
//   firstName: `Lex`, // property : value
//   lastName: `Tira`,
//   birthYear: 1979,
//   job: `webdev`,
//   friends: [`Michael`, `Peter`, `Steven`],
//   hasDriversLicense: true,

// // * this: refers to the object that is calling the function
//   calcAge: function () {
//     return 2022 - this.birthYear;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license`
//   }
// }

// console.log(lex.getSummary());

// * LECTURE: Object Methods

// const myCountry = {
//   country: `Holland`,
//   capital: `Amsterdam`,
//   language: `Dutch`,
//   population: 17,
//   neighbors: [`Germany`, `Belgium`, `Luxemburg`],

//   describe: function () {
//     console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`)
//   },

//   checkIsland: function () {
//     this.isIsland = this.neighbors.length === 0 ? true : false;
//   }
// }

// myCountry.describe();

// * Coding Challenge 3

// const mark = {
//   fullName: `Mark Miller`,
//   weight: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.weight / (this.height ** 2);
//     return this.bmi;
//   }
// }

// const john = {
//   fullName: `John Smith`,
//   weight: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.weight / (this.height ** 2);
//     return this.bmi;
//   }
// }

// mark.calcBMI(); // don't forget to call the method (function). the method won't call itself.
// john.calcBMI();
// console.log(mark.bmi)
// console.log(john.bmi)

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
// } else {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`)
// }

// * Iteration: The for Loop

// for (let i = 0; i <= 10; i++) {
//   console.log(i)
// }

//* LECTURE: Iteration: The for Loop

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`)
// }

// * Looping Arrays, Breaking and Continuing

// const lexArray = [
//   `Lex`,
//   `Tira`,
//   2022 - 1979,
//   `webdev`,
//   [`Michael`, `Peter`, `Steven`]
// ];

//* Reading an array
// for (let i = 0; i < lexArray.length; i++) {
//   console.log(lexArray[i])
// }

//* Filling an array
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2020 - years[i]);
// }

// console.log(ages)

//* Continue and break

// const lexArray = [
//   `Lex`,
//   `Tira`,
//   2022 - 1979,
//   `webdev`,
//   [`Michael`, `Peter`, `Steven`]
// ];

// for (let i = 0; i < lexArray.length; i++) {

//   if (typeof lexArray[i] !== `string`) continue; // skip items that are not a string

//   console.log(lexArray[i], typeof lexArray[i])
// }

// for (let i = 0; i < lexArray.length; i++) {

//   if (typeof lexArray[i] === `number`) break; // stop when a number is found

//   console.log(lexArray[i], typeof lexArray[i])
// }

// * LECTURE: Looping Arrays, Breaking and Continuing
// const populations = [84, 17, 1441, 11];
// const percentages2 = [];

// function percentageOfWOrld1(population) {
//   return (population / 7900) * 100;
// }

// for (let i = 0; i <= populations.length; i++) {
//   const perc = percentageOfWOrld1(populations[i])
//   percentages2.push(perc);
// }

// console.log(percentages2);

// * Looping Backwards and Loops in Loops

// const lexArray = [
//   `Lex`,
//   `Tira`,
//   2022 - 1979,
//   `webdev`,
//   [`Michael`, `Peter`, `Steven`]
// ];

//* Looping backwards
// for (let i = lexArray.length - 1; i >= 0; i--) {
//   console.log(lexArray[i]);
// }

// * Loops in Loops

// for (let i = 1; i <= 3; i++) {

//   for (let j = 1; j <= 5; j++) {
//     console.log(`test`)
//   }
// }

// * LECTURE: Looping Backwards and Loops in Loops

// const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for (let i = 0; i < listOfNeighbors.length; i++) {
//   for (let j = 0; j < listOfNeighbors[i].length; j++);
//   console.log(`Neighbor: ${listOfNeighbors [i] [j] }`);
// }

// * The while Loop. Run while this condition is true. it can be any condition, not just counter. Use it when you don't know hoy many loops there will be.

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6 )+ 1;
//   if (dice === 6) {
//     console.log(`loop is about to end`)
//   }
// }

// * LECTURE: The while Loop

// const populations = [84, 17, 1441, 11];
// const percentages2 = [];

// function percentageOfWOrld1(population) {
//   return (population / 7900) * 100;
// }

// for (let i = 0; i <= populations.length; i++) {
//   const perc = percentageOfWOrld1(populations[i])
//   percentages2.push(perc);
// }

// console.log(percentages2);

// const populations = [84, 17, 1441, 11];
// const percentages3 = [];

// function percentageOfWOrld1(population) {
//   return (population / 7900) * 100;
// }

// let i = 0;
// while (i < populations.length) {
//   const perc = percentageOfWOrld1(populations[i])
//     percentages3.push(perc);
//     i++;
// }

// console.log(percentages3)

//  * Coding Challenge 4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// function calcTip(bill) {
//   return bill > 50 && bill < 300 ? bill * .15 : bill * .20;
// }

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i])
// }

// console.log(tips)
// console.log(totals);

// // Bonus

// function calcAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
// return sum / arr.length;
// }

// console.log(calcAverage(totals))

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice)

// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }

// const age1 = calcAge1(1979);
// console.log(age1);

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('Nobody wins');
//   }
// }

// checkWinner(avgDolphins, avgKoalas);

// const friends = ['michael', 'steven', 'peter'];

// console.log(friends.includes('michael'))

// function calcTip(bill) {
//   if (bill > 50 && bill < 300) {
//     const tip = bill * 0.15;
//     return tip;
//   } else {
//     const tip = bill * 0.2;
//     return tip;
//   }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(total);

// objects: for unordered data. uses curly braces.
// const lexObject = {
//   firstName: 'Lex',
//   lastName: 'Tirajoh',
//   birthYear: 1979,
//   job: 'student',
//   friends: ['jan', 'klaas', 'tim'],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
// };

// console.log(lexObject)

// console.log(lexObject.lastName)

// console.log(lexObject.friends[1])

// console.log(`${lexObject.firstName} has ${lexObject.friends.length} friends and his best friend is ${lexObject.friends[0]}`)

// console.log(lexObject.calcAge());

// console.log(`${lexObject.firstName} is a ${lexObject.age}-year old ${lexObject.job} and he has ${this.hasDriversLicense ? 'a' : 'not' } driver's license`)

// const markObject = {
//   firstName: 'Mark',
//   lastName: 'Miller',
//   weight: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// const johnObject = {
//   firstName: 'John',
//   lastName: 'Smith',
//   weight: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// markObject.calcBMI();
// johnObject.calcBMI();

// if (markObject.bmi > johnObject.bmi) {
//   console.log(
//     `${markObject.firstName}'s BMI (${markObject.bmi}) is higher than ${johnObject.firstName}'s (${johnObject.bmi})`
//   );
// } else {
//   {
//     console.log(
//       `${johnObject.firstName}'s BMI (${johnObject.bmi}) is higher than ${markObject.firstName}'s (${markObject.bmi})`
//     );
//   }
// }

// const lexArray = [
//   'lex',
//   'tirajoh',
//   2022 - 1979,
//   'student',
//   ['jan', 'klaas', 'piet'],
// ];

// // for (let i = 0; i < lexArray.length; i++) {
// //   console.log(lexArray[i]);
// // }

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2022 - years[i]);
// }

// console.log(ages);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  if (bill > 50 && bill < 300) {
    const tip = bill * 0.15;
    return tip;
  } else {
    const tip = bill * 0.2;
    return tip;
  }
}

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);

  tips.push(tip);
  totals.push(bills[i] + tip);
  console.log(totals);
}

function calcAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum / arr.length;
}
console.log(calcAverage(totals));    
