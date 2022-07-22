// LECTURE: Values and Variables

// let country = "The Netherlands";
// let continent = "Europe";
// let population = 17;
// console.log(country, continent, population)
// console.log(true)

// LECTURE: Data Types

// let isIsland = false;
// let language;
// console.log(typeof isIsland,typeof population,typeof country,typeof language)

// LECTURE: let, const and var

// const language = 'Dutch';
// const country = 'The Netherlands';
// const continent = 'Europe';
// let population = 17;
// const isIsland = false;

// // const variable cannot be changed; let can.

// //  Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

// const firstName = 'Jonas';
// const lastName = 'Ti';
// console.log(firstName + ' ' +  lastName)

// // Assignment Operators
// let x = 10 + 5; // 15
// x += 10; // adds 10
// x *= 4; // multiplies by 4
// x++ // adds one
// x-- // subtracts one
// console.log(x);

// //  Comparison Operators

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

//  LECTURE: Basic Operators

// console.log(population / 2);

// population++
// console.log(population)

// let populationFinland = 6;
// console.log(population > populationFinland);

// let averagePopulation = 33;
// console.log(population < averagePopulation);

// let description = country + ' is in ' + continent + ' and its ' + population + ' million people speak ' + language;

// console.log(description)

/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
 */

// const weightMark = 78;
// const weightJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95

// const bmiMark = weightMark / (heightMark ** 2);
// const bmiJohn = weightJohn / (heightJohn ** 2);

// console.log(bmiMark, bmiJohn)

// const markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI)

//  Strings and Template Literals

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2022;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job;
// console.log(jonas)

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
// console.log(jonasNew)

// console.log(`string with \n\ multiple \n\ lines`)
// console.log(`string
// with
// ultiple
// lines`)

// LECTURE: Strings and Template Literals

// let descriptionTemplate = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(descriptionTemplate)

// Taking Decisions: if / else Statements

// const age = 19;

// if (age >= 18) {
//   console.log(`Sarah can start driving license`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
// }

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// LECTURE: Taking Decisions: if / else Statements

// if (population > 30) {
//   console.log(`${country}'s population is above average`)
// } else {
//   let belowAverage = 33 - population;
//   console.log(`${country}'s population is ${belowAverage} million below average`)
// }

// Coding Challenge #2

// const weightMark = 78;
// const weightJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95;
// const bmiMark = weightMark / (heightMark ** 2);
// const bmiJohn = weightJohn / (heightJohn ** 2);

// if (bmiMark > bmiJohn) {
//   console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`)
// } else {
//   console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`)
// }

// Type Conversion and Coercion

// type conversion
// const inputYear = '1991';

// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);
// console.log(String(23), 23)

//  tyype coercion

// plus operator converts to string

// LECTURE: Type Conversion and Coercion

// '9' - '5'; 4
// '19' - '13' + '17'; 617
// '19' - '13' + 17; 23
// '123' < 57; false
// 5 + 6 + '4' + 9 - 4 - 2; 1143

//  Truthy and Falsy Values

// const money = 0; // 0 is a falsy value

// if (money) {
//   console.log(`don't spend it all`)
// } else {
//   console.log(`get a job!`)
// }

// const age = 18;

// Equality Operators: == vs. ===

// Use === strict equality to avoid weird behavior

// const favorite = Number(prompt(`What's your favorite number`));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log(`cool!`)
// } else if (favorite === 7) {
//   console.log(`7 is also a cool number`)
// } else {
//   console.log(`wrong number`)
// }

// if (favorite !== 8) {
//   console.log(`why not 8`)
// }

// LECTURE: Equality Operators: == vs. ===

// const numNeighbors = Number(prompt(`How many neigbor countries does your country have?`));

// if (numNeighbors === 1) {
//   console.log(`Only 1 border`)
// } else if (numNeighbors > 1) {
//   console.log(`More than 1 border`)
// } else {
//   console.log(`No borders`)
// }

// Logical Operators

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log(`Sarah is able to drive`)
// } else {
//   console.log(`Someone else should drive`)
// }

// const isTired = false;

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log(`Sarah is able to drive`)
// } else {
//   console.log(`Someone else should drive`)
// }

// LECTURE: Logical Operators

// const country = 'The Netherlands';
// const continent = 'Europe';
// const language = 'Dutch';
// let population = 17;
// const isIsland = false;

// if (language === `English` && population < 50 && !isIsland) {
//   console.log(`Sarah should live in Holland`)
// } else {
//   console.log(`Sarah should not move to Holland`)
// }

// Coding Challenge #3

// const dolphinsScore = (96 + 108 + 89) / 3;
// const koalasScore = (88 + 91 + 110) / 3;

// if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//   console.log(`Dolphins win`)
// } else if (koalasScore > dolphinsScore && koalasScore >= 100) {
//   console.log(`Koalas win`)
// } else if (dolphinsScore === koalasScore && dolphinsScore >= 100) {
//   console.log(`It's a draw`)
// } else {
//   console.log(`Nobody won`)
// }

// Switch statement

// const day = `saturday`;

// switch (day) {
//   case `monday`:
//     console.log(`Plan course structure`);
//     break;
//   case `tuesday`:
//     console.log(`Prepare videos`);
//     break;
//   case `wednesday`:
//   case `thursday`:
//   case `friday`:
//     console.log(`Record videos`);
//     break;
//   default:
//     console.log(`it's weekend`)
// }

// if (day === `monday`) {
//   console.log(`Plan course structure`)
// } else if (day === `tuesday`) {
//   console.log(`Prepare videos`)
// } else if (day === `wednesday` || day === `thursday` || day === `friday`) {
//   console.log(`record videos`)
// } else {
// console.log(`it's weekend`)
// }

//  LECTURE: The switch Statement

// const language = `chinese`;

// switch (language) {
//   case `chinese`:
//   case `mandarin`:
//     console.log(`Most number of native speakers`);
//     break;
//   case `spanish`:
//     console.log(`2nd most number of speakers`);
//     break;
//   case `english`:
//     console.log(`3rd number`);
//     break;
//   default:
//     console.log(`great language too`)
// }

// The Conditional (Ternary) Operator

// const age = 20;

// const canDrink = age >= 18 ? `I can drink wine` : `I cannot drink wine`; // With ternary operators you don't have to declare a variable first. Mush shorter than if else satements.

// console.log(`I am ${age} years old so ${canDrink}`);

// LECTURE: The Conditional (Ternary) Operator

// const population = 17;

// const averagePopulation = population > 33 ? `above` : `below`;
// console.log(`Holland's population is ${averagePopulation} average.`)

// Coding Challenge #4

// const bill = 40;
// const tip = bill > 50 && bill < 300 ? bill * .15 : bill * .20;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

// Coding Challenge 1

// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = weightMark / heightMark ** 2;
// const bmiJohn = weightJohn / heightJohn ** 2;

// const markHigherBMI = bmiMark > bmiJohn;

// console.log(markHigherBMI);

// Coding Challenge 2

// if (markHigherBMI) {
//   console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`)
// } else {
//   console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`)
// }

// Coding Challenge 3

// const dolphinsScore = (96 + 108 + 89) / 3;
// const koalasScore = (88 + 91 + 110) / 3;

// if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//   console.log('Dolphins win!');
// } else if (dolphinsScore === koalasScore && dolphinsScore >= 100) {
//   console.log("It's a draw!");
// } else {
//   console.log('Koalas win!');
// }

// const day = 'monday';

// switch (day) {
//   case 'monday':
//     console.log("It's Monday");
//     break;
//   case 'tuesday':
//     console.log("It's Tuesday");
// }
