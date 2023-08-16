/// /////// FOR IN LOOPS //////////

/// /////// PROBLEM 1 //////////

// Do not edit the code below.
const number = {
  age: 30,
  score: 100,
  length: 12,
  year: 2016,
};
// Do not edit the code above.

// Here we have a function called objectLooper that will take a number object and loop
// over it. Inside this loop, change the value of each property to 0

function objectLooper(obj) {
  for (const key in obj) {
    // REPLACE THIS WITH YOUR CODE
  }
  return obj;
}

/// /////// PROBLEM 2 //////////

// Do not edit the code below.
const state = {
  utah: 2942902,
  texas: 26956958,
  california: 38802500,
};
// Do not edit the code above.

// Check each value inside the pre-written for in loop
// If a value is greater than 3,000,000 set it to 0

function stateLooper(obj) {
  for (const key in obj) {
    // REPLACE THIS WITH YOUR CODE
  }
  return obj;
}

/// /////// PROBLEM 3 //////////

// Here is a function named cleanUser that will be passed an object
// Inside of this function, loop over the object so that every property with a falsy value is removed
// Once all falsy values and their properties are removed, return the object

function cleanUser(obj) {
  // REPLACE THIS WITH YOUR CODE

  return obj;
}

/// /////// PROBLEM 4 //////////

// Create a function called maxedOut that takes a user object and loops over that object
// to change all the object property values to "max".
// Return the updated user object.

function maxedOut(user) {
  // REPLACE THIS WITH YOUR CODE

  return user;
}

/// /////// OBJECT DESTRUCTURING //////////

/// /////// PROBLEM 5 //////////

// Do not edit the code below.
const animalCount = {
  cats: 2,
  dogs: 5,
  mice: 0,
};
// Do not edit the code above.

// Use object destructuring syntax to create variables for each of the properties of the
// animalCount object.

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 6 //////////

// Create an object with three key/value pairs 
// The keys or properties should be students, mentors and instructors 
// Set the value of students to be 24, mentors to be 3 and instructors to be 5 
// Then destructure the properties into separate variables

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 7 //////////

// Create an object named languages with the properties 'french', 'english' and 'spanish'
// Give these properties the value true if you speak the language or false if you do not
// Use destructuring to assign the values of these properties to new variables

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 8 //////////

// For this problem, write a function called subtraction with an object parameter
// The object passed in this function will have the property names num1 and num2
// In the function, use object destructuring to assign the values of these properties to
// new variables.
// Subtract num2 from num1 and return the result

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 9 //////////

// Create a function called zooAnimals that will take an object parameter
// The object passed to this function will have the property names lion, tiger, and bear
// The values of these properties will be a number representing the count of that animal in the zoo
// Using object destructuring, return the total sum of the counts of these animals

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 10 //////////

// Now that you've practiced object destructuring inside of a function with that
// function's parameter, we will take it one step further.
// Instead of using object destructuring inside of the function, we can declare a
// destructured object as our parameter (see below for an example).
//
// const exampleObj = {one: 1, two: 2, three: 3}
//
// const immediatelyDestructured = ({one, two, three}) => {
//   return one + two + three
// }
//
// The function immediatelyDestructured has a parameter that is a destructured object.
// This is useful because we can immediately use the variables one, two and three in the
// function instead of having to destructure the object parameter inside of the function.
// If we were to invoke the function and pass in the exampleObj object below, the
// returned value would be 6.

// For this problem, write a function called greeting.
// Instead of giving it an object parameter, give it a destructured object as it's
// parameter.
// The properties of this object will be name and title.
// Return from this function a greeting sentence that should say "Hello, <title> <name>!".
// Title and name in this sentence should be replaced with the values of the
// destructured object variables.

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 11 //////////

// Create a function called truthyFalsy that takes a destructured object as its
// parameter. The properties of this object will be number and string. One of these
// properties will be truthy and the other will be falsy Return the value that is truthy.

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 12 //////////

// Create a one line ES6 arrow function called isGreaterThanTwenty that will take in a
// single parameter
// The function should return true if the parameter is greater than 20 and should return
// false otherwise
//
// You should not use the ES5 function declaration or function expression syntax in your
// final solution
// Your function should also be contained within a single line

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 13 //////////

// Create a one line arrow function called seven that will return the number 7
//
// You should not use the ES5 function declaration or function expression syntax in your
// final solution
// Your function should also be contained within a single line

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 14 //////////

// Re-write the commented out ES5 functions provided below as ES6 arrow functions
// Name your functions the same as the ES5 versions provided below
//
// You should not use the ES5 function declaration or function expression syntax in your
// final solution
// Your function should also be contained within a single line

// function add(num1, num2) {
//   return num1 + num2;
// }

// REPLACE THIS WITH YOUR CODE

// function subtract(num1, num2) {
//   return num1 - num2;
// }

// REPLACE THIS WITH YOUR CODE

// function double(num) {
//   return num * 2;
// }

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 15 //////////

// Create an ES6 arrow function called multiply that takes in two parameters: num1 and
// num2.
// The function should return the product of the two parameters.
//
// You should not use the ES5 function declaration or function expression syntax in your
// final solution.

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 16 //////////

// Create an ES6 arrow function called concatenate that takes in two parameters: str1
// and str2.
// The function should return a single concatenated (joined) str of str1 and str2.
//
// You should not use the ES5 function declaration or function expression syntax in your
// final solution.

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 17 //////////

// Write an arrow function called gemInfo that takes in three parameters: gemType,
// gemSize, and gemWeight.
// The function should return an object with the properties: gemType, gemSize, gemWeight.
// The values of each property should correspond to its respective parameter.
//
// You should not use the ES5 function declaration or function expression syntax in your
// final solution.

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 18 //////////

// Create a function called identifier that uses the filter higher order array method to
// filter over the provided jobs array of objects.
// The function should return the object of the person with a job as a programmer.
// Make sure to use the arrow function in conjunction with the filter method.
//
// Your returned value should be a single object, not an array with one object inside of
// it.
// You should not use the ES5 function declaration or function expression syntax in your
// final solution.
// You should not use a for loop, but should use the filter method instead.

// Do not edit the code below.
const jobs = [{ receptionist: 'James' }, { programmer: 'Steve' }, { designer: 'Alicia' }];
// Do not edit the code above.

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 19 //////////

// Create a function called evens that takes in an array as a parameter.
// The function should use the filter method to filter over the array parameter and
// return a new array with only the even numbers included.
// Make sure to use the arrow function construct combined with the higher order array
// filter method.
//
// You should not use the ES5 function declaration or function expression syntax in your
// final solution.
// You should not use a for loop, but should use the filter method instead.

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 20 //////////

// Create a function called startWithLetterA that takes in an array as a parameter.
// The function should use the filter method to filter over the array of strings and
// return a new array with only the strings that start with the letter "A" or "a".
// The filter is not case-sensitive, so it should return words that begin with both "A"
// and "a".
// Make sure to use the arrow function construct combined with the higher order array
// filter method.
//
// You should not use the ES5 function declaration or function expression syntax in your
// final solution.
// You should not use a for loop, but should use the filter method instead.

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 21 //////////

// Edit the formalGreeting function and use the built in .map method to map over the
// names parameter and return a new array with "Hello, " appended to the beginning of
// each name.
// Make sure to use arrow functions combined with the map method.

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 22 //////////

// Edit the productOfArray function and use the built in .reduce method to loop over the
// numbers parameter and return the product of all the numbers in the array.
// Make sure to use arrow functions combined with the reduce method.

// REPLACE THIS WITH YOUR CODE
