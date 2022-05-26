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
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(2, 3, 5));

// const scoreDolphins = calcAverage(45, 55, 71);
// const scoreKoalas = calcAverage(65, 54, 44);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoales) {
//   if (avgDolphins >= 2 * avgKoales) {
//     console.log(`Dolphins win ✨ (${avgDolphins} vs. ${avgKoales})`);
//   } else if (avgKoales >= 2 * avgDolphins) {
//     console.log(`Koales win ✨ (${avgKoales} vs. ${avgDolphins})`);
//   } else {
//     console.log(`No team wins`);
//   }
// };
// checkWinner(22, 239);

// Data Structures Array and objects
// const friends = ["Guru", "Roshan", "Souha"];
// console.log(friends);

// const years = new Array(2000, 2001, 2003);
// console.log(years);

// console.log(years.length);
// // TO get the last elem from an array
// console.log(years[years.length - 1]);
// // replace a elem from a array
// years[1] = 2002;
// console.log(years);

// const roshan = [
//   "Muhammad Roshan",
//   19,
//   "developer",
//   `his friends are ${friends}`,
// ];
// console.log(roshan);

// //exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const y = [2000, 2002, 2003, 2005];
// const age1 = calcAge(y[0]);
// const age2 = calcAge(y[1]);
// const age3 = calcAge(y[2]);
// const age4 = calcAge(y[y.length - 1]);
// console.log(age1, age2, age3, age4);

// const ages = [calcAge(y[0]), calcAge(y[1]), calcAge(y[y.length - 1])];
// console.log(ages);

// // basic array operations
// // add elements at the end of a array
// const dost = ["Guru", "Roshan", "Souha"];
// const newDost = dost.push("Navin");
// console.log(dost);
// console.log(newDost);

// // add elements at the start
// dost.unshift("Blessed");
// console.log(dost);

// //remove elements
// const popped = dost.pop(); //Last one
// console.log(dost);
// console.log(popped);

// //remove first element
// const shifted = dost.shift();
// console.log(dost);
// console.log(shifted);

// //indexOf returns the position of a element
// console.log(dost.indexOf("Souha"));
// //includes return
// console.log(dost.includes("roshan"));
// console.log(dost.includes("Roshan"));

// // interview question 1
// if (true) {
//   console.log(v);
//   var v = 2;
//   let i = 1;
//   console.log(i);
// }

// // differnce between == / ===

// // let and const

// // const c = 1;
// // c = 2;
// // console.log(c);
// //const lets you modify if it's a object
// const d = [1, 2];
// d.push(3);
// console.log(d);

// // null and undefined

// // arrow function
// const profile = {
//   firstName: "",
//   lastName: "",
//   setName: function (name) {
//     let splitName = (n) => {
//       let nameArray = n.split(" ");
//       this.firstName = nameArray[0];
//       this.lastName = nameArray[1];
//     };
//     splitName(name);
//   },
// };
// profile.setName("Muhammad Roshan");
// console.log(profile.firstName);

// //prototypal inheritance
// // prototype based inheritance
// let car = function (model) {
//   this.model = model;
// };

// car.prototype.getModel = function () {
//   return this.model;
// };

// let toyota = new car("toyota");
// console.log(toyota.getModel());

// let nissan = new car("nissan");
// console.log(nissan.getModel());

// // function declaration and function expression
// console.log(funcD());

// function funcD() {
//   console.log("function declaration");
// }

// let funcE = function () {
//   console.log("function expression");
// };
// console.log(funcE());

// // promises
// // setTimeOut
// setTimeout(function () {
//   console.log("a");
// }, 0);
// // the above becomes asynchronous
// console.log("b");
// console.log("c");
// array exercises
// tip calc
// function calcTip(amount) {
//   if (amount > 300 && amount < 50) {
//     return (amount * 15) / 100;
//   } else {
//     return (amount * 20) / 100;
//   }
// }
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
console.log(calcTip(55));
const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// total of bills and tips
const totals = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
console.log(bills, tip, totals);

// Objects in Javascript
// object literal syntax
const Roshan = {
  firstName: "Muhammad", //keys are also called property
  lastName: "Roshan",
  age: 2037 - 2001,
  job: "Software Developer",
  friends: ["Micheal", "Peter", "Guru"],
};
console.log(Roshan.firstName);

const nameKey = "Name";
console.log(Roshan[`first` + `${nameKey}`]);
console.log(Roshan[`last` + `${nameKey}`]);
// promt or input
// const interestedIn = prompt(
//   "what do you want to know about Roshan? Choose between firstName, lastName, age,job, and friends"
// );
// if (Roshan[interestedIn]) {
//   console.log(Roshan[interestedIn]);
// } else {
//   console.log("Wrong Request!");
// }
Roshan.location = "India";
Roshan["Reddit"] = "muhammad_roshan";
console.log(Roshan);

// challenge
console.log(
  `${Roshan.firstName} has ${Roshan.friends.length} friends and his best Friend is called ${Roshan.friends[2]}`
);

// Object Methods
const roshan = {
  firstName: "Muhammad", //keys are also called property
  lastName: "Roshan",
  birthYear: 2001,
  job: "Software Developer",
  friends: ["Micheal", "Peter", "Guru"],
  hasDriversLicense: false,
  calcAge: function () {
    return 2022 - this.birthYear;
  },
};

console.log(roshan.calcAge());
