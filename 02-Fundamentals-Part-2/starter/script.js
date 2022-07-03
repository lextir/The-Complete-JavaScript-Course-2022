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

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
}

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 40);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`Nobody wins`);
  }
}

checkWinner(avgDolphins, avgKoalas);