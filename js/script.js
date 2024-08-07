`use strict`;

/**
 *
 * Activating strict mode : It enables the restricted version of JavaScript.
 * It disallow us to do certain things in JavaScript which otherwise will not through any kind of visible errors.
 * It is introduced in ECMAScript 5.Strict mode be activated for a particular function or entire file or for entire project.
 *
 * Example of silent erros which will be 'restricted' in 'strict' mode :
 * 1. Assiging values to undeclared variable will through an error.
 * 2. Deleting a non-deleteable property will through an error.
 * 3. Duplicating a parameter name in a function will through an error.
 *
 *
 * Benefits of Scrict mode :
 * 1. Sometimes code can run faster.
 * 2. Prohibits some syntex likely to be defined in future versions of ECMAscript ex 'eval', 'argument', 'interface' , 'private' etc
 *
 *
 */

/**
 *
 * Data Types in Javascript :
 * In Javascript every value is either an Object value or Primitive value.
 * Javascript supports dynamic typing i.e it automatically detects the data type.
 *
 *
 * Data Types
 * Primitive :
 * 1. Number : floating type number ex 23, 45.55 , 3434.3434
 * 2. String : Sequence of character ex 'This is a string'
 * 3. Boolean : Logival type ex : True or False
 * 4. Undefined : Value taken by a variable which is not yet defined.
 * 5. Null : Empty value
 * 6. Symbol (ES2015) :  Value that is unique and can't be changed
 * 7. BigInt (ES2020) : Larger integer than the number type.
 *
 * `Values` has datatype not the `Variables`. !important
 *
 *
 *
 */

// let is used to declare a variable , assigning value is not mandatory. value to variable can be defined or updated later also
let javascriptIsFun = true;
let undefinedValue; // value is not defined i.e undefined

// typeof : function used to get the data type of a value stored in the variable.
console.log(typeof javascriptIsFun);

console.log(typeof undefinedValue);

console.log(typeof null); // it will show `object` which is a bug and its not fixed.

/**
 *
 * Declaring variables using let,const & var :
 *
 * 1. let(ES6) : Declare `block scoped` variables which can change later while our program runs.Value assigning is not mandatory.
 * 2. const(ES6) : (scope ? ) Declare variables which can't be changes throughout the execution of the program.Value assigning is mandatory.
 * 3. var(lagacy) :  Declare `function scoped` variable which can be updated later and assigning value is not mandatory.
 *
 */

/**
 *
 * Basic Operators : Symbols or Keywords used to perform operations on values or variables.
 *
 * Types of Operators :
 * 1. Arithmetic Operators : `+`,`-`,`*`,`/`,`%`,`++`,`--` .
 * 2. Assignment Operators : `=`,`+=`,`-=`,`*-`,`/=`,`%=` .
 * 3. Comparision Operator : `==`,`===`,`!=`,`!==`,`>`,`<`,`>=`,`<=` .
 * 4. Logial Operator : `&&`, `||` , `!` .
 * 5. Bitwise Operator :  `&`,`|`,`^`,`~`,`<<`,`>>`,'>>>'.
 * 6. String Operator : `+` (Concatinate strings)
 * 7. Conditional Operator : `?`.
 * 8. Type Operators : `typeof`,`instanceof`.
 *
 */

/**
 *
 * Operator Precedence : It determines the order in which operators are evaluated in expressions.
 * When multiple operators in a single expression then operator of higher precedence will be executed first.
 *
 *
 *
 */

/**
 *
 * Template Literals : Template literals, introduced in ES6, provide a more powerful way to create strings.
 * They allow for embedded expressions, multiline strings, and string interpolation.
 *
 */

let name = "Vikas Kumar";

console.log(`Hello ${name}`); // Template literal example

/**
 *
 * Taking Decision : if / else
 *
 */

const isEligible = true;
if (isEligible) {
  console.log(`Yes eligible`);
} else {
  console.log(`Try next year`);
}

/**
 *
 * Type Conversion : When we manually changes data type of a value stored in a variable.
 *
 *
 * Type Coercion : When Javascript automatically changes the data type behind the scene.
 *
 *
 *
 */

const YOB = `1990`;
const AGE = 34;
console.log(typeof YOB);
console.log(typeof Number(YOB)); // type conversion , original value type is not converted

console.log("I am " + AGE + " years old"); // type coercion , AGE value converted to string data types

/**
 *
 * Truthy values : Values that translates to true when evaluated in a Boolean context ex :  true, non zero number , non empty string , Objects , Arrays , function
 * Falsy values : Values that translates to false values when evaluated in Boolean context ex : false, zero, empty string , null, undefined , NaN.
 *
 */

/**
 *
 * Equity Operators : `==` and `===`
 *  `==` : Checks if two values are equal or not.
 *  `===` : Checks if two values are equal and also have same data type.
 *
 *
 */

/**
 *
 * Boolean Logic : uses true / fasle value to solve logical problems
 *
 * &&(AND) : All conditions are true
 * ||(OR) : All or one of the conditions is true
 * !(NOT) :  Invert the true/false value
 *
 */

/**
 * Switch Statement : Logic used when we have to switch based on multiple values
 * It uses strict equality check `===`
 *
 *
 */

const day = "Monday";

switch (day) {
  case "Monday":
    console.log(`It's monday`);
    break;
  case "Other":
    console.log(`It's not monday`);
    break;
  default:
    console.log(`Some other day`);
}

/**
 * Statement & Expressions :
 *
 * Expression : Any valid unit of code that resolves to a value.
 * ex : 3 + 4 , true , false etc
 *
 * Statement : Bigger piece of code/instruction that performs an action.
 * ex : if / else statement , switch statement
 *
 */

/**
 *
 * Ternary Operator / Conditional Operator  : one line if-else statement
 * Syntex : CONDITION ? CONDITION TRUE BLOCK : CONDITION FALSE BLOCK
 *
 */

const age = 18;

age >= 18
  ? console.log(`You are allowed to drive`)
  : console.log(`You are not allowed to drive`);

/**
 *
 * Functions : Fundamental building block of any programming language to write a reuseable code.
 *
 * Key points :
 * 1. Function declared must have a name.
 * 2. When declared in global scope , a function becomes global function.
 * 3. Functions are hoisted to top of their scope i.e we can call the function before it is defined in the code.
 *
 *
 */

function funOne() {
  // Creating a function
  console.log("Simplest function possible");
}

funOne(); // executing a function
funOne(); // we can call the function as many time we want

/**
 *
 * Function Expressions / Anonymous Function : A function with no name which produces a value.
 *
 * Key points / difference from functions :
 * 1. Function expressions are not hoisted.They are created at the run time when te execution reches the defination.
 * 2. Function expressions can be anonymous or named.
 * 3. Function Expressions Useful for recursion and debugging.
 * 4. Function Expressions are often assigned to variables, which can then be used to call the function.
 * 5. Function Expressions can be passed to other functions as an argument.
 *
 */

const calcAge = function (yob) {
  return 2024 - yob;
};

console.log(calcAge(1990));

/**
 *
 * Arrow Function : Introduced in ECMAScript 6 (ES6), provide a more concise syntax for writing function expressions.
 * 1. Arrow function explicitly returns the result.
 *
 *
 */

const calAge1 = (yob) => 2024 - yob;
//variable name = argument => code;
const sum = (a, b, c) => a + b + c;

const mul = (a, b, c) => {
  a += b * c;
  return a * b * c;
};

console.log(mul(3, 2, 1));
console.log(sum(23, 34, 45));

console.log(calAge1(1990));

/**
 *
 * Function calling other function
 *
 *
 */

getData(2);

function firstFun(one, two) {
  return one * two;
}

function getData(one) {
  a = firstFun(3, 5);
  b = firstFun(1, 2);
  console.log("Data " + a * b);
}

/**
 *
 * Arrays : Special objects used to store multiple values of same or different data type in a single variable.
 *
 *
 *
 */

// Methods 1 (preffered )
const list = [
  "one",
  2,
  true,
  "I am a developer",
  (a, b) => {
    let c = a * b;
  },
];

console.log(list);

console.log(list[4]);

// Method 2

const listTwo = new Array("one", 5, false);
console.log(listTwo);

console.log(list.length - 1); // getting the length of the array

/**
 *
 * Basic Array functions :
 *
 * Push function :
 * 1. Adds a new data to the end of the list.
 * 2. Returns the new lenght of the array.
 *
 */

listTwo.push("A new data");
console.log(listTwo);

/**
 *
 * Unshift Function :
 * 1. Adds a new data to the begining of the array.
 * 2. Returns the new lenght of the arra.
 *
 */
console.log(listTwo.length); // Old length
console.log(listTwo.unshift("A new data at the beginig of Array")); // New length after unshift.

/**
 *
 * Pop Function :
 * 1. Removes the last element of the Array.
 * 2. Returns the new removed Element of the Array.
 *
 */

console.log(listTwo.pop()); // returns the returned alement of the array.
console.log(listTwo); // updated list after pop

/**
 *
 * Shift Function :
 * 1. Removes the first element of Array.
 * 2. Returns the removed item of the array.
 *
 */

console.log(listTwo.shift()); // returns the removed item.

/**
 *
 * indexOf function :
 * 1. Function returns the index of the element.
 *
 *
 *
 */

console.log(listTwo); // returns entire list
console.log(listTwo.indexOf(5)); // return the index of 5 (starting from 0)
console.log(listTwo.indexOf(3)); // return -1 of the element not found in the array.

/**
 *
 * includes function :
 * 1. Returns true / false based on the result of the search.
 * 2. It uses 'Strict (===)' comparision.
 */

console.log(listTwo.includes(5)); // return true
console.log(listTwo.includes(2)); // return false

/**
 *
 * Objects : JavaScript objects are collections of key-value pairs.
 * Each key (or property) has a corresponding value. Values can be
 * primitives (like numbers or strings), other objects, or functions
 *
 *
 * Question : Comparision / difference between Object  & Arrays
 */

const dataObj = {
  // key : value
  firstName: "Tarun",
  lastName: "Chauhan",
  yob: 1990,
  age: function () {
    return new Date().getFullYear() - this.yob;
  },
  skills: ["PHP", "JavaScript", "Laravel", "AJAX", "jQuery", "React"],
};

console.log(dataObj);

/**
 *
 * Accessing Object data :
 * 1. Since we are using the 'key : value' pair, the order of the object's property doesn't matter.
 * 2. To access any values from the object we'll use the key.
 * 3. To access the value we can use either 'dot' or 'bracket' notation.
 *
 */

console.log(dataObj.firstName); // dot notation
console.log(dataObj.age()); // bracket notation
const nameKey = "Name";
console.log(dataObj[`last${nameKey}`]); // we can use 'expressions' in bracket notation but not in dot notation

/**
 *
 * Iteration : For loop
 *
 */

for (let i = 0; i < 10; i++) {
  console.log(`Loop no ${i}`);
}

/**
 *
 * Looping Arrays , break & continue
 *
 */

const nameList = [
  "Tarun Chauhan",
  "Anirudh Chauhan",
  "Priya Chauhan",
  "Hope Chauhan",
  "Varun Chauhan",
];
// Running loop through all of the array
for (let i = 0; i <= nameList.length - 1; i++) {
  console.log(nameList[i]);
}
// skipping the loop when a condition is met
for (let i = 0; i <= nameList.length - 1; i++) {
  if (nameList[i] === "Priya Chauhan") {
    continue;
  }
  console.log(nameList[i]);
}
// exiting the loop when a condition is met
for (let i = 0; i <= nameList.length - 1; i++) {
  if (nameList[i] === "Hope Chauhan") {
    break;
  }
  console.log(nameList[i]);
}

/**
 *
 * DOM & DOM manipulation :
 *
 * DOM : Document Object Model - Structured representation of a HTML document , it allows JavaScript to access
 * elements of HTML in order to manipulate them.
 * 1. Using DOM manipulation we can change HTML & CSS of the page.
 * 2. As soon as a HTML page is loaded the browser creates a tree structure of thee elements and ecah element is an object.
 *
 */

/**
 *
 * Theory Section
 *
 * JavaScript's properties :
 * 1. High-Level : No need to worry about resources allocation.
 *                 Downside : the program will never be as fast as a low level programming langauge like c++.
 * 2. Prototype-based Object-Oriented : Everything in JavaScript is an object , exept primitive values.
 *                    Everything is derived from the prototypes and has some methods to it. ec array , objects etc.
 * 3. Multi-paradigm : Code can be structured in many ways as per the experiance and requirement.
 *                    (Procedural/ Object-oriented & Functional programming)
 * 4. Just-in-time compiled
 * 5. First class functions : Functions are treated as variables , and functions can be passed to other
 *                            functions and a function can return other functions.
 * 6. Single Threaded
 * 7. Garbage collection : Feature of JavaScript engine which automatically removed the unsed variable/data ,
 *                        this improves the app performance.
 * 8.Dynamic : We don't need to declare data types while declaring a variable, data type is changes automatically.
 *
 */

/**
 *
 * Data Structure in JavaScript :
 *
 * Array Destructuring : Introduced in ES6 it is a method of unpacking values of an Array.
 *
 */

const numArray = [0, 1, 2];
// old method
const zero = numArray[0];
const one = numArray[1];
const two = numArray[2];
// ES6 method

const [aa, bb, cc] = numArray;

console.log(aa, bb, cc);

/**
 *
 * Destructuring Objects : Unpacking Objects.
 *
 */

const infoObj = {
  fullName: "Tarun Chauhan",
  state: "Himachal Pradesh",
  skills: {
    backend: ["PHP", "MySQL", "Laravel"],
    frontend: ["HTML & CSS", "JavaScript", "ReactJS"],
    other: ["DSA", "Linux"],
  },
};

// Unpacking object
const { fullName, state, skills } = infoObj;

console.log(fullName, state, skills);

// Giving custom names

const { fullName: yourName, state: yourState, skills: yourSkills } = infoObj;

console.log(yourName, yourState, yourSkills);

// giving default values if data doesn't exists

const { yob = null, backend = [] } = infoObj;
console.log(yob, backend);

// Mutating variabels with Object's data

const numObj = { aaa: 1, bbb: 2, ccc: 3 };

let aaa = 111;
let bbb = 222;

console.log(aaa, bbb);

({ aaa, bbb } = numObj);

console.log(aaa, bbb);

/**
 *
 * Spread Operator :
 *
 */

const arrayOne = [4, 5, 6, 7, 8, 9];

console.log(...arrayOne);

const arrayTwo = [1, 2, ...arrayOne];

console.log(arrayTwo);

/**
 *
 * Rest pattren and Parameters
 *
 */

const [x, , z, ...other] = arrayOne; // leaving empty to skip an element of array
console.log(x, z, other);

const add = function (...params) {
  let sum = 0;
  for (let i = 0; i < params.length; i++) {
    sum += params[i];
  }
  console.log(sum);
};

add(1, 2);
add(3, 4, 5, 6, 7);
add(23, 35, 56, 34, 2, 324, 46, 57, 68, 78, 23);

/**
 *
 * Short Circuiting : && and || operator
 *
 */

console.log("" || false || "Tarun" || 0 || 1); // || will display the first truthy value it encounter while executing the expression
console.log("1" && "1" && false && "JavaScript"); //  && will return the first Falsy value in the expression"

/**
 *
 * Nullish Coalescing Operator :
 *
 */

const numOfGuest = 0;
const numOfTable = numOfGuest / 4 || 2; // It will return 2 which is logically incorrect.
const numOfTable2 = numOfGuest / 4 ?? 2; // It will return 0 which is logically correct.
console.log(numOfTable);
console.log(numOfTable2);

/**
 *
 * Looping an Array :
 *
 */

const carList = ["Maruti 800", "WagonR", "Alto K10", "Swift Dzire", "Creta"];

for (const car of carList) {
  // returns the elements of the array
  console.log(car);
}

for (const car of carList.entries()) {
  // returns the array with index & element
  console.log(...car);
}

/**
 *
 * Enhanced Object Literals
 *
 */

/**
 *
 * Optional Chaining
 *
 */

const workingHours = {
  monday: {
    open: 10,
    close: 22,
  },
  friday: {
    open: 10,
    close: 22,
  },
};

console.log(workingHours.monday.open);
console.log(workingHours.tuesday?.open); // if 'tuesday' is defined then only shows 'open' value else it will return undefined

/**
 *
 * Looping Object
 *
 */

for (const day of Object.keys(workingHours)) {
  console.log(day);
}

console.log(Object.keys(workingHours));

console.log(Object.entries(workingHours));

console.log(Object.values(workingHours));

/**
 *
 * Sets : JavaScript Set is a built-in object that allows you to store unique values of any type,
 * whether primitive values or object references
 *
 *
 */

const dataSet = new Set(["car", "bus", 1, 0, 11, 11, true, "car"]);

console.log(dataSet);

// A string is iterateable

console.log(new Set("Tarun"));

// Getting the size of a set

console.log(dataSet.size);

// check if avalue exists in a set

console.log(dataSet.has("car"));

console.log(dataSet.has("tarun"));

// Adding a new value

console.log(dataSet.add("A new data"));
console.log(dataSet.add("Pizza"));
console.log(dataSet.add("Pizza"));

console.log(dataSet);

console.log(dataSet.delete("car"));
console.log(dataSet);

/**
 *
 * Maps : JavaScript Map objects are a collection of key-value pairs where the keys can be of any type, including objects.
 *        They maintain the order of their elements, which means that insertion order is preserved.
 *        This makes Map objects distinct from plain JavaScript objects, which only allow strings and symbols as keys and
 *        do not guarantee order.
 *
 */

const carsMapList = new Map();
console.log(carsMapList.set(1, "Maruti 800")); // Adding a new set to the map list will return the updated map.
console.log(carsMapList.set(2, "Wagon R VXI"));
console.log(carsMapList.set(3, "Maruti Alto k10"));

// Map set method chaining

console.log(carsMapList.set(4, "Suzuki Dzire").set(5, "Create"));
console.log(
  carsMapList
    .set(true, "isEligibleForDriving")
    .set(false, "notEligibleForDriving")
);
// Display data from a map using get

console.log(carsMapList.get(4));
console.log(carsMapList.get(true));

console.log(carsMapList.get(3 > 4)); // we can also use expression as a key

// Delete a value

console.log(carsMapList.delete(1)); // returns true / false

// Clear the map
carsMapList.clear();

console.log(carsMapList);

// using arry as the key
const arr = [1, 2];

console.log(carsMapList.set(arr, "Mahindra Bolero Pickup")); // setting the data with array key
console.log(carsMapList.get(arr)); // getting the data with array key

// Using DOM element object to as a key

console.log(
  carsMapList.set(document.querySelector("h1"), "This is the heaidng") // using an object as an key
);

/**
 *
 * Maps Iterations :
 *
 */

const quiz = new Map([
  ["Question", "Which is the best programming language"],
  [1, "PHP"],
  [2, "C"],
  [3, "JavaScript"],
  ["Answer", 3],
  [true, "Correct Answer"],
  [false, "Incorrect Answer"],
]);

console.log(quiz);

// show question

console.log(quiz.get("Question"));

// Display answers , whiose key type in number only
for (const [key, value] of quiz) {
  if (typeof key === "number") console.log(key, value);
}

const answer = 3; //Number(prompt("Enter your answer"));

console.log(quiz.get(answer === quiz.get("Answer")));

/**
 *
 * A closer look at functions
 *
 */

const bookingList = [];

const bookingFun = function (
  numOfPerson = 1,
  flightNum = 111,
  totalAmount = 100
) {
  const bookingObj = {
    numOfPerson,
    flightNum,
    totalAmount,
  };

  console.log(bookingObj);
  bookingList.push(bookingObj);
};

bookingFun(2, 22, 322);
bookingFun();
console.log(bookingList);
