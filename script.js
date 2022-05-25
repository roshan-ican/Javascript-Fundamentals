// // // "use strict";
// // // let hasDriversLicense = false;
// // // const passTest = true;

// // // if (passTest) hasDriversLicense = true;
// // // if (hasDriversLicense) console.log("I can drive");

// // // functions can be used sereval times in the code by invoking it
// // function logger() {
// //   console.log("Hi I am a logger");
// // }
// // // Below we invoked the function
// // // Calling / running / invoking the function
// // logger();

// // // function with params
// // function foodProcessor(apples, oranges) {
// //   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// //   return juice;
// // }
// // const Juicy = foodProcessor(8, 5);
// // console.log(Juicy);
// // console.log(foodProcessor(8, 5));

// // // BIRTH CALCULATION
// // // In function declarations
// // function ageCalc(birthYear) {
// //   return 2022 - birthYear;
// // }
// // const auntyAge = ageCalc(1954);
// // console.log(auntyAge);
// // // Expression function for
// // const age = function (dob) {
// //   return 2022 - dob;
// // };
// // const roshan = age(2002);

// // console.log(auntyAge, roshan);

// // // Arrow Function
// // const Year = (yearOfBirth) => 2022 - yearOfBirth;
// // const souha = Year(2003);
// // console.log(auntyAge, roshan, souha);

// // // Arrow Function with parameters
// // const yearsUntilRetirement = (dateOfBirth, firstName) => {
// //   const yourAge = 2022 - dateOfBirth;
// //   const retirementAge = 65 - yourAge;
// //   // return retirementAge;
// //   return `${firstName} retires at the age of ${retirementAge}`;
// // };
// // console.log(yearsUntilRetirement(2002, "Roshan"));
// // console.log(yearsUntilRetirement(2003, "Souha"));

// // Function calling another function
// function cutFruitPieces(fruit) {
//   return 4 * fruit;
// }

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges`;
//   return juice;
// }
// console.log(applePieces);
// console.log(orangePieces);

// console.log(fruitProcessor(3, 4));
// // var jsdom = require("jsdom");
// // var JSDOM = jsdom.JSDOM;
// // const body = document.body;
// // const div = document.querySelector("div");
// // const span1 = document.querySelector("#hi");
// // const span2 = document.querySelector("#bye");
// // console.log(span1.id);
// for (let index = 0; index < array.length; index++) {}
// Function calling a function
// Machine for cutting the fruits
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   //calling the machine to cut fruits
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(4, 5));
// const yearsUntilRetirement = (birthYear, name) => {
//   const age = 2037 - birthYear;
//   const retirementAge = 65 - age;
//   // return retirementAge;
//   return `${name} retires in ${retirementAge} years`;
// };
// console.log(yearsUntilRetirement(2001, "Roshan"));

// Reviewing the function
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };
// console.log(yearsUntilRetirement(2003, "Souha"));
// console.log(yearsUntilRetirement(2001, "Roshan"));
// CHalleng

// 1.create the average of 3 scores
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(2, 3, 5));

const scoreDolphins = calcAverage(45, 55, 71);
const scoreKoalas = calcAverage(65, 54, 44);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoales) {
  if (avgDolphins >= 2 * avgKoales) {
    console.log(`Dolphins win ✨ (${avgDolphins} vs. ${avgKoales})`);
  } else if (avgKoales >= 2 * avgDolphins) {
    console.log(`Koales win ✨ (${avgKoales} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins`);
  }
};
checkWinner(22, 239);
