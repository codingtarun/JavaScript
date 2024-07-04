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
let undefinedValue;  // value is not defined i.e undefined

// typeof : function used to get the data type of a value stored in the variable.
console.log(typeof javascriptIsFun);

console.log(typeof undefinedValue);

console.log(typeof null); // it will show `object` which is a bug and its not fixed.

/**
 * 
 * Declaring variables using let,const & var : 
 * 
 * 1. let(ES6) : Declare `block scoped` variables which can change later while our program runs.Value assigning is not mandatory.
 * 2. const(ES6) : Declare variables which can't be changes throughout the execution of the program.Value assigning is mandatory.
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

let name = 'Vikas Kumar';

console.log(`Hello ${name}`); // Template literal example

/**
 * 
 * Taking Decision : if / else 
 * 
 */

const isEligible = true;
if(isEligible){
    console.log(`Yes eligible`);
}else {
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

const YOB  = `1990`;
const AGE = 34;
console.log(typeof YOB);
console.log(typeof(Number(YOB))); // type conversion , original value type is not converted

console.log('I am '+ AGE + ' years old'); // type coercion , AGE value converted to string data types

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

const day = 'Monday';

switch(day) {
    case 'Monday' : 
        console.log(`It's monday`);
        break;
    case 'Other' : 
        console.log(`It's not monday`);
        break;
    default : 
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

age >= 18 ? console.log(`You are allowed to drive`) : console.log(`You are not allowed to drive`);


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

function funOne(){ // Creating a function 
    console.log('Simplest function possible');
}

funOne() // executing a function
funOne() // we can call the function as many time we want


/**
 * 
 * Function Expressions / Ananymous Function : A function with no name which produces a value. 
 * 
 * Key points / difference from functions : 
 * 1. Function expressions are not hoisted.They are created at the run time when te execution reches the defination.
 * 2. Function expressions can be anonymous or named.
 * 3. Function Expressions Useful for recursion and debugging.
 * 4. Function Expressions are often assigned to variables, which can then be used to call the function.
 * 5. Function Expressions can be passed to other functions as an argument.
 * 
 */

const calcAge = function(yob){
    return 2024 - yob;
}

console.log(calcAge(1990));


/**
 * 
 * Arrow Function : Introduced in ECMAScript 6 (ES6), provide a more concise syntax for writing function expressions. 
 * 1. Arrow function explicitly returns the result.
 * 
 * 
 */

  const calAge1 = yob => 2024 - yob;
  //variable name = argument => code;
  const sum = (a,b,c) => a+b+c;

  const mul = (a,b,c) => {
    a += b*c;
    return a*b*c;
  }

  console.log(mul(3,2,1));
  console.log(sum(23,34,45));

  console.log(calAge1(1990));


  /**
   * 
   * Function calling other function : 
   * 
   * 
   * 
   */