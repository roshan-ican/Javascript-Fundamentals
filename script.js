// // // // "use strict";
// // // // let hasDriversLicense = false;
// // // // const passTest = true;

// // // // if (passTest) hasDriversLicense = true;
// // // // if (hasDriversLicense) console.log("I can drive");

// // // // functions can be used sereval times in the code by invoking it
// // // function logger() {
// // //   console.log("Hi I am a logger");
// // // }
// // // // Below we invoked the function
// // // // Calling / running / invoking the function
// // // logger();

// // // // function with params
// // // function foodProcessor(apples, oranges) {
// // //   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// // //   return juice;
// // // }
// // // const Juicy = foodProcessor(8, 5);
// // // console.log(Juicy);
// // // console.log(foodProcessor(8, 5));

// // // // BIRTH CALCULATION
// // // // In function declarations
// // // function ageCalc(birthYear) {
// // //   return 2022 - birthYear;
// // // }
// // // const auntyAge = ageCalc(1954);
// // // console.log(auntyAge);
// // // // Expression function for
// // // const age = function (dob) {
// // //   return 2022 - dob;
// // // };
// // // const roshan = age(2002);

// // // console.log(auntyAge, roshan);

// // // // Arrow Function
// // // const Year = (yearOfBirth) => 2022 - yearOfBirth;
// // // const souha = Year(2003);
// // // console.log(auntyAge, roshan, souha);

// // // // Arrow Function with parameters
// // // const yearsUntilRetirement = (dateOfBirth, firstName) => {
// // //   const yourAge = 2022 - dateOfBirth;
// // //   const retirementAge = 65 - yourAge;
// // //   // return retirementAge;
// // //   return `${firstName} retires at the age of ${retirementAge}`;
// // // };
// // // console.log(yearsUntilRetirement(2002, "Roshan"));
// // // console.log(yearsUntilRetirement(2003, "Souha"));

// // // Function calling another function
// // function cutFruitPieces(fruit) {
// //   return 4 * fruit;
// // }

// // function fruitProcessor(apples, oranges) {
// //   console.log(apples, oranges);
// //   const applePieces = cutFruitPieces(apples);
// //   const orangePieces = cutFruitPieces(oranges);
// //   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges`;
// //   return juice;
// // }
// // console.log(applePieces);
// // console.log(orangePieces);

// // console.log(fruitProcessor(3, 4));
// // // var jsdom = require("jsdom");
// // // var JSDOM = jsdom.JSDOM;
// // // const body = document.body;
// // // const div = document.querySelector("div");
// // // const span1 = document.querySelector("#hi");
// // // const span2 = document.querySelector("#bye");
// // // console.log(span1.id);
// // for (let index = 0; index < array.length; index++) {}
// // Function calling a function
// // Machine for cutting the fruits
// // function cutFruitPieces(fruit) {
// //   return fruit * 4;
// // }
// // function fruitProcessor(apples, oranges) {
// //   //calling the machine to cut fruits
// //   const applePieces = cutFruitPieces(apples);
// //   const orangePieces = cutFruitPieces(oranges);

// //   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
// //   return juice;
// // }
// // console.log(fruitProcessor(4, 5));
// // const yearsUntilRetirement = (birthYear, name) => {
// //   const age = 2037 - birthYear;
// //   const retirementAge = 65 - age;
// //   // return retirementAge;
// //   return `${name} retires in ${retirementAge} years`;
// // };
// // console.log(yearsUntilRetirement(2001, "Roshan"));

// // Reviewing the function
// // const calcAge = function (birthYear) {
// //   return 2037 - birthYear;
// // };
// // const yearsUntilRetirement = function (birthYear, firstName) {
// //   const age = calcAge(birthYear);
// //   const retirement = 65 - age;

// //   if (retirement > 0) {
// //     console.log(`${firstName} retires in ${retirement} years`);
// //     return retirement;
// //   } else {
// //     console.log(`${firstName} has already retired`);
// //     return -1;
// //   }
// // };
// // console.log(yearsUntilRetirement(2003, "Souha"));
// // console.log(yearsUntilRetirement(2001, "Roshan"));
// // CHalleng

// // 1.create the average of 3 scores
// // const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(2, 3, 5));

// // const scoreDolphins = calcAverage(45, 55, 71);
// // const scoreKoalas = calcAverage(65, 54, 44);
// // console.log(scoreDolphins, scoreKoalas);

// // const checkWinner = function (avgDolphins, avgKoales) {
// //   if (avgDolphins >= 2 * avgKoales) {
// //     console.log(`Dolphins win ✨ (${avgDolphins} vs. ${avgKoales})`);
// //   } else if (avgKoales >= 2 * avgDolphins) {
// //     console.log(`Koales win ✨ (${avgKoales} vs. ${avgDolphins})`);
// //   } else {
// //     console.log(`No team wins`);
// //   }
// // };
// // checkWinner(22, 239);

// // Data Structures Array and objects
// // const friends = ["Guru", "Roshan", "Souha"];
// // console.log(friends);

// // const years = new Array(2000, 2001, 2003);
// // console.log(years);

// // console.log(years.length);
// // // TO get the last elem from an array
// // console.log(years[years.length - 1]);
// // // replace a elem from a array
// // years[1] = 2002;
// // console.log(years);

// // const roshan = [
// //   "Muhammad Roshan",
// //   19,
// //   "developer",
// //   `his friends are ${friends}`,
// // ];
// // console.log(roshan);

// // //exercise
// // const calcAge = function (birthYear) {
// //   return 2037 - birthYear;
// // };
// // const y = [2000, 2002, 2003, 2005];
// // const age1 = calcAge(y[0]);
// // const age2 = calcAge(y[1]);
// // const age3 = calcAge(y[2]);
// // const age4 = calcAge(y[y.length - 1]);
// // console.log(age1, age2, age3, age4);

// // const ages = [calcAge(y[0]), calcAge(y[1]), calcAge(y[y.length - 1])];
// // console.log(ages);

// // // basic array operations
// // // add elements at the end of a array
// // const dost = ["Guru", "Roshan", "Souha"];
// // const newDost = dost.push("Navin");
// // console.log(dost);
// // console.log(newDost);

// // // add elements at the start
// // dost.unshift("Blessed");
// // console.log(dost);

// // //remove elements
// // const popped = dost.pop(); //Last one
// // console.log(dost);
// // console.log(popped);

// // //remove first element
// // const shifted = dost.shift();
// // console.log(dost);
// // console.log(shifted);

// // //indexOf returns the position of a element
// // console.log(dost.indexOf("Souha"));
// // //includes return
// // console.log(dost.includes("roshan"));
// // console.log(dost.includes("Roshan"));

// // // interview question 1
// // if (true) {
// //   console.log(v);
// //   var v = 2;
// //   let i = 1;
// //   console.log(i);
// // }

// // // differnce between == / ===

// // // let and const

// // // const c = 1;
// // // c = 2;
// // // console.log(c);
// // //const lets you modify if it's a object
// // const d = [1, 2];
// // d.push(3);
// // console.log(d);

// // // null and undefined

// // // arrow function
// // const profile = {
// //   firstName: "",
// //   lastName: "",
// //   setName: function (name) {
// //     let splitName = (n) => {
// //       let nameArray = n.split(" ");
// //       this.firstName = nameArray[0];
// //       this.lastName = nameArray[1];
// //     };
// //     splitName(name);
// //   },
// // };
// // profile.setName("Muhammad Roshan");
// // console.log(profile.firstName);

// // //prototypal inheritance
// // // prototype based inheritance
// // let car = function (model) {
// //   this.model = model;
// // };

// // car.prototype.getModel = function () {
// //   return this.model;
// // };

// // let toyota = new car("toyota");
// // console.log(toyota.getModel());

// // let nissan = new car("nissan");
// // console.log(nissan.getModel());

// // // function declaration and function expression
// // console.log(funcD());

// // function funcD() {
// //   console.log("function declaration");
// // }

// // let funcE = function () {
// //   console.log("function expression");
// // };
// // console.log(funcE());

// // // promises
// // // setTimeOut
// // setTimeout(function () {
// //   console.log("a");
// // }, 0);
// // // the above becomes asynchronous
// // console.log("b");
// // console.log("c");
// // array exercises
// // tip calc
// // function calcTip(amount) {
// //   if (amount > 300 && amount < 50) {
// //     return (amount * 15) / 100;
// //   } else {
// //     return (amount * 20) / 100;
// // //   }
// // // }
// // const calcTip = function (bill) {
// //   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // };
// // console.log(calcTip(55));
// // const bills = [125, 555, 44];
// // const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// // // total of bills and tips
// // const totals = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
// // console.log(bills, tip, totals);

// // // Objects in Javascript
// // // object literal syntax
// // const Roshan = {
// //   firstName: "Muhammad", //keys are also called property
// //   lastName: "Roshan",
// //   age: 2037 - 2001,
// //   job: "Software Developer",
// //   friends: ["Micheal", "Peter", "Guru"],
// // };
// // console.log(Roshan.firstName);

// // const nameKey = "Name";
// // console.log(Roshan[`first` + `${nameKey}`]);
// // console.log(Roshan[`last` + `${nameKey}`]);
// // // promt or input
// // // const interestedIn = prompt(
// // // calcAge: function () {
// // //   return 2022 - this.birthYear;
// // // },
// // //   "what do you want to know about Roshan? Choose between firstName, lastName, age,job, and friends"
// // // );
// // // if (Roshan[interestedIn]) {
// // //   console.log(Roshan[interestedIn]);
// // // } else {
// // //   console.log("Wrong Request!");
// // // }
// // Roshan.location = "India";
// // Roshan["Reddit"] = "muhammad_roshan";
// // console.log(Roshan);

// // // challenge
// // console.log(
// //   `${Roshan.firstName} has ${Roshan.friends.length} friends and his best Friend is called ${Roshan.friends[2]}`
// // );

// // // Object Methods
// // const roshan = {
// //   firstName: "Muhammad", //keys are also called property
// //   lastName: "Roshan",
// //   birthYear: 2001,
// //   job: "Software Developer",
// //   friends: ["Micheal", "Peter", "Guru"],
// //   hasDriversLicense: false,
// //   calcAge: function () {
// //     this.age = 2022 - this.birthYear;
// //     return this.age;
// //   },
// // };
// // console.log(roshan.calcAge());

// // console.log(roshan.age);
// // // coding challenge 3
// // const mark = {
// //   fullName: "Mark Miller",
// //   mass: 50,
// //   height: 4.1,
// //   calcBMI: function () {
// // //     this.bmi = this.mass / this.height ** 2;
// // //   },
// // // };

// // // const john = {
// // //   fullName: "John Smith",
// // //   mass: 60,
// // //   height: 3.1,
// // //   calcBMI: function () {
// // //     this.bmi = this.mass / this.height ** 2;
// // //   },
// // // };
// // // john.calcBMI();
// // // mark.calcBMI();
// // // console.log(mark.bmi, john.bmi);

// // // if (mark.bmi > john.bmi) {
// // //   console.log(
// // //     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
// // //   );
// // // } else if (john.bmi > mark.bmi) {
// // //   console.log(
// // //     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
// // //   );
// // // }

// // // Loops 😊
// // for (let rep = 1; rep <= 30; rep++) {
// //   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// // }
// // //loop through the array
// // const roshan = [
// //   "Muhammad",
// //   "Roshan",
// //   2022 - 2001,
// //   "Developer",
// //   ["Guru", "Naushad", "Souha"],
// //   true,
// // ];
// // const types = [];
// // for (let i = 0; i < roshan.length; i++) {
// //   // reading from the jonas array
// //   console.log(roshan[i], typeof roshan[i]);
// //   // filling the types of array
// //   // types[i] = typeof roshan[i];
// //   types.push(typeof roshan[i]);
// // }
// // console.log(types);

// // // birthYears
// // const years = [2001, 2003, 2004, 2006];
// // const ages = [];

// // for (let i = 0; i < years.length; i++) {
// //   ages.push(2022 - years[i]);
// // }
// // console.log(ages);

// // // Continue and Break
// // console.log("-----ONLY STRINGS-----");
// // for (let i = 0; i < roshan.length; i++) {
// //   if (typeof roshan[i] !== "string") continue;
// //   console.log(roshan[i], typeof roshan[i]);
// // }
// // console.log("-----BREAK WITH NUMBER-----");
// // for (let i = 0; i < roshan.length; i++) {
// //   if (typeof roshan[i] === "number") break;
// //   console.log(roshan[i], typeof roshan[i]);
// // }
// // // looping backwards
// // const souha = [
// //   "Souha",
// //   "Tourifa",
// //   2022 - 2001,
// //   "Doctor",
// //   ["Ikram", "Zineb", "Roshan"],
// //   true,
// // ];

// // for (let i = souha.length - 1; i >= 0; i--) {
// //   console.log(i, souha[i]);
// // }

// // // loop inside loops
// // for (let exercise = 1; exercise < 4; exercise++) {
// //   console.log(`---starting exercise--- ${exercise}`);

// //   for (let rep = 1; rep <= 6; rep++) {
// //     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
// //   }
// // }
// // The While Loop
// // let rep = 1;
// // while (rep <= 10) {
// //   console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️`);
// //   rep++;
// // }
// // roll a dice until you get 6
// // let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// // while (dice !== 6) {
// //   console.log(`You rolled a ${dice}`);
// //   dice = Math.trunc(Math.random() * 6) + 1;
// // }
// // let rep = 1;
// // while (rep <= 10) {
// //   // console.log(`WHILE: Lifting rep ${rep}🏋️‍♂️`);
// //   rep++;
// // }
// // // Roll of dice
// // let dice = Math.trunc(Math.random() * 6) + 1;

// // while (dice !== 6) {
// //   console.log(`you rolled a ${dice}`);
// //   dice = Math.trunc(Math.random() * 6) + 1;
// //   if (dice === 6) console.log("Loop is about to die");
// // }
// // Challenge
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);
// // bonus challenge

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i]
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };
// console.log(calcAverage([23, 234, 33, 3]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
// 'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// // const calcAge = birthYear => 2022 - birthYear;
// // console.log(calcAge(2002));
// //Finally DOM Manipulation
// 'use strict';
// // function calcAge(birthYear) {
// //   const age = 2022 - birthYear;
// //   // console.log(firstName);
// //   function printAge() {
// //     const output = `${firstName} you are ${age}, born in ${birthYear}`;
// //     console.log(output);
// //     //
// //     if (birthYear >= 1981 && birthYear <= 1996) {
// //       var millinial = false;
// //       const str = `Oh, you are a millinial, ${firstName}`;
// //       console.log(str);

// //       function add(a, b) {
// //         return a + b;
// //       }
// //     }
// //     // console.log(str);
// //     console.log(millinial);
// //     console.log(add(2, 3));
// //   }
// //   printAge();
// //   return age;
// // }
// // const firstName = 'Roshan';
// // calcAge(2001);
// console.log(me);
// // console.log(year);
// // console.log(job);
// // Hoisting
// var me = 'Roshan';
// let year = '2001';
// const job = 'Software Developer';
// // Hoisted functions
// console.log(addDecl(7, 8));
// // console.log(addExp(8, 7));
// // console.log(addArrow(7, 7));

// // function
// function addDecl(a, b) {
//   return a + b;
// }
// // function expression
// const addExp = function (a, b) {
//   return a + b;
// };
// // Arrow Function
// const addArrow = (a, b) => a + b;
// //
// var addArr = (x, y) => x + y;
// // undefined(x, y)
// console.log(numOfProducts);
// if (!numOfProducts) deleteShoppingCart();
// var numOfProducts = 10;
// function deleteShoppingCart() {
//   console.log('All the Products are deleted');
// }

// // Regular function vs arrow function
// const Roshan = {
//   firstName: 'Roshan',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//     // const self = this;
//     // const isMillinial = function () {
//     //   console.log(this.self >= 2001 && self.year <= 2022);
//     // };
//     // solution 2
//     const isMillinial = function () {
//       console.log(this);
//       console.log(this.year >= 1991 && this.year <= 1996);
//     };
//     isMillinial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// Roshan.greet();
// Roshan.calcAge();

// Arguments keyword
// const addExp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExp(2, 5);
// addExp(2, 5, 7, 9);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);
// Primitive Types
// let age = 30;
// let oldAge = age;
// age = 32;
// // console.log(age);
// // console.log(oldAge);

// // const me = {
// //   name: 'Roshan',
// //   age: 32,
// // };
// // const friend = me;
// // friend.age = 29;
// // console.log('friend', friend);
// // console.log('me', me);

// // Primitive Values vs/ Reference Values
// // Primivities vs Objects
// let lastName = 'Sahani';
// let oldLastName = lastName;
// lastName = 'Ali';
// console.log(lastName, oldLastName);
// // Reference Value

// const Souha = {
//   firstName: 'Souha',
//   lastName: 'Tourifia',
//   age: 19,
// };
// const marriedSouha = Souha;
// marriedSouha.lastName = 'Angham Ali';
// console.log('Before marriage', Souha);
// console.log('After marriage', marriedSouha);

// // copying object
// const Souha2 = {
//   firstName: 'Souha',
//   lastName: 'Tourifa',
//   age: 20,
//   family: ['Mumma', 'Papa'],
// };

// const SouhaCopy = Object.assign({}, Souha2);
// SouhaCopy.lastName = 'Ali';

// SouhaCopy.family.push('May');
// SouhaCopy.family.push('Dorsaf');
// SouhaCopy.family.push('Samar');

// console.log('Before marriage:', Souha2);
// console.log('After marriage:', SouhaCopy);

// //A closer look at the functions
// 'use strict';
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 10,
//   price = 199 * numPassengers
// ) {
//   // // ES5 or old way of adding default parameters
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LM124');
// createBooking('LM124', 2, 100);
// createBooking('lmfg', 55);
// //to leave a second parameter
// createBooking('LMFG', undefined, 100);

// // primitives and objects in function

// const flight = 'LM234';
// const roshan = {
//   name: 'roshan',
//   passport: 24783974238498,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LLS23';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 24783974238498) {
//     alert('Check In');
//   } else {
//     alert('Wrong passport');
//   }
// };
// checkIn(flight, roshan);
// console.log(flight);
// console.log(roshan);

// Higher Order functions
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };
// // HIGHER ORDER FUNCTION
// const transformer = function (str, fn) {
//   console.log(`Transformed string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('Javascript is the best!', upperFirstWord);
// transformer(`Javascript is the best!,`, oneWord);

// // Js uses callbacks all the time
// const high2 = function () {
//   console.log('✌');
// };
// document.body.addEventListener('click', high2);
// ['jonas', 'Martha', 'Adam'].forEach(high2);

// a closer look at functions
'use strict';

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetHey = greet('Hey');
// greetHey('Jonhn');
// greetHey('Steven');

// greet('Hello')('Souha');

// // challenge
// const salam = greeting => name => console.log(`${greeting} ${name}`);

// salam('Assalam walikum')('Souha');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   booking: [],
// };

// closures
const secureBooking = function () {
  // birthplace of a function
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// internal property of closure
console.dir(booker);

// Closure examples
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); //this function is the first one
console.dir(f); //dir is how you check the variable environment of closure

// Re-assigned f function
h();
f();
console.dir(f);

// Example 2
