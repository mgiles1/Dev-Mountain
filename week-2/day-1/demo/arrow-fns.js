/// Arrow Functions

// An arrow function with no parameters.
const sayHello = () => {
  console.log('Hello');
};
sayHello(); // Hello

// The same function written as a function declaration:
// function sayHello() {
//   console.log('Hello');
// }

// An arrow function with one parameter.
const sayMyName = (name) => {
  console.log(`Your name is ${name}`);
};
sayMyName('Pikachu'); // Your name is Pikachu

// The same function written as a function declaration:
// function sayMyName(name) {
//   console.log(`Your name is ${name}`);
// }

// An arrow function with multiple parameters.
const getFullName = (first, last) => {
  return `${first} ${last}`;
};
console.log(getFullName('Ada', 'Lovelace')); // Ada Lovelace

// The same function as a function declaration:
// function getFullName(first, last) {
//   return `${first} ${last}`;
// }

// An arrow function with a one line return.
const sum = (num1, num2) => num1 + num2;
console.log(sum(2, 3)); // 5

// The same function as a function declaration:
// function sum(num1, num2) {
//   return num1 + num2;
// }
