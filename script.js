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
// // const transformer = function (str, fn) {
// //   console.log(`Transformed string: ${str}`);
// //   console.log(`Transformed string: ${fn(str)}`);

// //   console.log(`Transformed by: ${fn.name}`);
// // };
// // transformer('Javascript is the best!', upperFirstWord);
// // transformer(`Javascript is the best!,`, oneWord);

// // // Js uses callbacks all the time
// // const high2 = function () {
// //   console.log('✌');
// // };
// // document.body.addEventListener('click', high2);
// // ['jonas', 'Martha', 'Adam'].forEach(high2);

// // a closer look at functions
// 'use strict';

// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };

// // const greetHey = greet('Hey');
// // greetHey('Jonhn');
// // greetHey('Steven');

// // greet('Hello')('Souha');

// // // challenge
// // const salam = greeting => name => console.log(`${greeting} ${name}`);

// // salam('Assalam walikum')('Souha');

// // const lufthansa = {
// //   airline: 'Lufthansa',
// //   iataCode: 'LH',
// //   booking: [],
// // };

// // closures
// const secureBooking = function () {
//   // birthplace of a function
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// // internal property of closure
// console.dir(booker);

// // Closure examples
// // Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f(); //this function is the first one
// console.dir(f); //dir is how you check the variable environment of closure

// // Re-assigned f function
// h();
// f();
// console.dir(f);

// // Example 2
// // timer
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   // the function below will be called after 3 seconds
//   setTimeout(function () {
//     console.log(`we are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   // this will be called immediately
//   console.log(`will start board in ${wait} seconds`);
// };
// // setTimeout(function () {
// //   console.log('Timer ');
// // }, 2000);

// boardPassengers(180, 3);
// console.dir(boardPassengers);

// // closure coding challenge
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   // this was possible because of closure
//   document.body.addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
// OOP in javascript
//Looping
// function multiplyAll(arr) {
//   let product = 1;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; i < arr[i].length; j++) {
//       // console.log(arr[i][j]);
//     }
//   }
//   return product;
// }
'use strict';
// const Person = function (firstName, birthYear) {
//   console.log(this);
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// new Person('Jonas', 1991);

// // 1.New {} is created
// // 2.function is called, this = {}
// // 3. {} linked is prototype
// // 4. function automatically return {}

// const souha = new Person('Souha', 2003);
// const roshan = new Person('Roshan', 2002);
// console.log(souha, roshan);

// console.log(souha instanceof Person);

// // Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };
// souha.calcAge();
// roshan.calcAge();

// console.log(souha.__proto__);
// console.log(souha.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(souha));
// console.log(Person.prototype.isPrototypeOf(roshan));
// console.log(Person.prototype.isPrototypeOf(Person));

// // setting properties on prototype not only methods
// Person.prototype.species = 'Homo Sapiens';
// console.log(souha.species, roshan.species);

// // checking the property
// console.log(souha.hasOwnProperty('firstName'));
// console.log(souha.hasOwnProperty('species'));

// console.log(souha.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(souha.__proto__.__proto__);
// console.log(souha.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// // prototype in arrys
// const arr = [23, 23, 4, 434, 34, 4];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// // doing some fun with built-in methods
// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// ES6 classes
'use strict';
// class expression
// class personCl = class {}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2031 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}
const deniz = new PersonCl('Deniz', 2028);
console.log(deniz);
deniz.calcAge();

console.log(deniz.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
deniz.greet();

// Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const roshan = Object.create(PersonProto);
// console.log(roshan);
// roshan.name = 'Roshan';
// roshan.birthYear = 2002;
// roshan.calcAge();

// console.log(roshan.__proto__ === PersonProto);

// const souha = Object.create(PersonProto);
// souha.init('Souha', 2003);
// souha.calcAge();

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
// Linking prototypes
Student.prototype.introduce = function () {
  console.log(`My Name is ${this.firstName} and I study ${this.course}`);
};
//
const roshan = new Student('Roshan', 2001, 'Computer Science');
console.log(roshan);
roshan.introduce();
roshan.calcAge();

const souha = new Student('Souha', 2003, 'Medicine');
console.log(souha);
souha.introduce();
souha.calcAge();

console.log(roshan instanceof Student);
console.log(roshan instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// Arrays
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // order function

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  ordrer: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 1, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} sir/madam!`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Your delicious pasta with ${ing1},
       ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu.entries) console.log(item);

// Destructured in a for of loop
for (let [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// Spread Operator
// const arr = [6, 4, 2];
// const badNewarr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewarr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// // copying array
// const mainMenuCopy = [...restaurant.mainMenu];
// // Joining 2 arrays
// const menu = [...mainMenuCopy, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables are strings, arrays, maps and sets but not Objects

// // We can only use spread operator when building a array or when we passing arguments to a function
// // const str = 'Roshan';
// // const letters = [...str, ' ', 'S.'];
// // console.log(letters);
// // console.log(...str);

// // const ingredients = [
// //   prompt("Let's make Pasta! Ingredient 1?"),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingredient 3?'),
// // ];
// // console.log(ingredients);
// // passing argument with the spread operator
// // restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurent = { FoundedIn: 1988, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurent);
// // Rest operatpor in Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // Functions Rest Operators
// const add = function (...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 4, 6);
// add(3, 6, 6, 9, 7, 9);
// // Order pizza

// restaurant.orderPasta('mushrooms', 'onion', 'beef', 'spinach');
// restaurant.orderPizza('mushrooms');

// // restaurant.orderDelivery({
// //   time: '22:30',
// //   address: 'Via del Sole, 21',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// // Objects destructed
// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant;
// // console.log(restaurantName, hours, tags);

// // // Default values
// // const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// // // Mutating variables
// // let x = 111;
// // let y = 999;
// // const obj = { x: 23, y: 22, z: 23 };
// // ({ x, y } = obj);
// // console.log(x, y);

// // Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// // array destructed
// const arr = [2, 3, 4];
// const [a, b, c] = arr;
// console.log(a, b, c);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);
// // switching variables using destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.ordrer(2, 0);
// console.log(starter, mainCourse);

// // nested array
// const nested = [2, 4, [5, 6]];
// // remember that we do not want in the middle
// // destructure inside destructure

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default Values
// const [p = 1, q = 1, r = 1] = [9, 3];
// console.log(p, q, r);

// Coding challenge

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Return the goals scored by the players
let goals = game.scored;

for (let [g, p] of goals.entries()) {
  console.log(`Goal ${g + 1}: ${p}`);
}

// calculate avergage
const odds = Object.values(game.odds);
let average = 0;
for (let odd of Object.values(game.odds)) average += odd;
average /= odds.length;
console.log(average);

//3. Print both team and the odds
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. unfair yellow card
gameEvents.delete(64);

// 3

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${92 / gameEvents.size} minutes`
);
// 4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[ ${half} HALF] ${min} : ${event}`);
}

// Strings methods
