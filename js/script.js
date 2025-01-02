/**
 *
 * JavaScript Functions :
 *
 */
// Declaring a function
function logger() {
  // Function body
  console.log("HELLO JAVA SCRIPT");
}

logger(); // Calling / invoking a function

// Passing & returning a value in function

function add(a, b) {
  // recieving two arguments
  return a + b; // returning the sum
}

console.log(add(34, 23)); // Displaying the returned data

// Function  experssions

const calAge = function (YOB) {
  return 2025 - YOB;
};

console.log(calAge(1990));

// Arrow function

const calYOB = (age) => 2025 - age;

console.log(calYOB(35));

const greetings = (name) => {
  return `${name} happy new year`;
};

console.log(greetings("Tarun Chauhan"));

// Functions calling other functions

const abc = (a, b) => {
  return a + b;
};

const xyz = (a, b) => {
  return a * b;
};

console.log(xyz(abc(1, 2), 3)); // Function passed to another function

// DATA STRUCTURES :
// Array

const friendsList = ["Tarun", "Varun", "Karun"];

// Objects
const dataObj = {
  id: 1,
  title: "Tarun Chauhan",
  job: "Software Developer",
  friends: friendsList,
};

console.log(dataObj);

// Dot notation
console.log(dataObj.title);
// Bracket notation
console.log(dataObj["job"]);

// Destructing Arrays

console.log(...friendsList);

// Destructuring Objects
console.log("DESTRUCTURING OBJECTS ");

const { id, title, job, friends } = dataObj;

console.log(id, title, job, ...friends);

const { id: key, title: name, job: prefession } = dataObj;

console.log(key, name, prefession);

console.log({ ...dataObj });




