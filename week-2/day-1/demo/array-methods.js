/// Array iteration methods

/// forEach()

// Using forEach to output the length of each string.
const fruits = ['apple', 'berry', 'cherry'];
fruits.forEach((fruit) => {
  console.log(fruit.length);
  // Output:
  // 5
  // 5
  // 6
});

// Outputting each argument passed to the callback.
fruits.forEach((fruit, idx, arr) => {
  console.log(fruit, idx, arr);
  // Output:
  // apple 0 [ 'apple', 'berry', 'cherry' ]
  // berry 1 [ 'apple', 'berry', 'cherry' ]
  // cherry 2 [ 'apple', 'berry', 'cherry' ]
});

// Using forEach() to replace every other letter in a string with an asterisk.
const phrase = 'Hello, world!';
let replacedEveryOther = '';
phrase.split('').forEach((letter, idx) => {
  if (idx % 2 === 0) {
    replacedEveryOther += letter;
  } else {
    replacedEveryOther += '*';
  }
});
console.log(replacedEveryOther); // H*l*o* *o*l*!

/// map()

const capitalizedFruits = fruits.map((fruit) => {
  return fruit[0].toUpperCase() + fruit.slice(1);
});
console.log(capitalizedFruits); // [ 'Apple', 'Berry', 'Cherry' ]
// fruits is unchanged:
console.log(fruits); // [ 'apple', 'berry', 'cherry' ]

const vals = [3, 100, 22];
const doubledVals = vals.map((val) => val * 2);
console.log(doubledVals); // [ 6, 200, 44 ]
// vals is unchanged:
console.log(vals); // [ 3, 100, 22 ]

const pets = [
  { name: 'Fido', species: 'dog', hasPhd: true },
  { name: 'Socks', species: 'cat', hasPhd: false },
  { name: 'Kiko', species: 'cat', hasPhd: true },
  { name: 'Noodles', species: 'fish', hasPhd: false },
];

// Use map() and forEach() to output a formal introduction for each pet.
pets
  .map((pet) => {
    if (pet.hasPhd) {
      return `Dr. ${pet.name} the ${pet.species}`;
    }
    return `${pet.name} the ${pet.species}`;
  })
  .forEach((title) => {
    console.log(`This is ${title}.`);
    // Output:
    // This is Dr. Fido, the dog.
    // This is Socks, the cat.
    // This is Dr. Kiko, the cat.
    // This is Noodles, the fish.
  });

// ...the pets array is unchanged:
pets.forEach((pet) => {
  console.log(pet);
});

/// filter()

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evens = nums.filter((num) => num % 2 === 0);
console.log(evens); // [ 2, 4, 6, 8 ]

const fish = pets.filter((pet) => pet.species === 'fish');
console.log(fish); // [ { name: 'Noodles', species: 'fish', hasPhd: false } ]

// Count the number of vowels in a string.
const sentence = 'The quick brown fox jumps over the lazy dog.';
const vowelsOnly = sentence.split('').filter((letter) => {
  return 'aeiou'.includes(letter);
});
console.log(`There are ${vowelsOnly.length} vowels in the sentence.`);
// Output:
// There are 11 vowels in the sentence.

/// reduce()

// Sum all the numbers in an array.
const initialValue = 0;
const sumAllNums = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumAllNums); // 45

// Reduce pets array to an object with species keys and names as values:
// {
//   dog: ['Fido'],
//   cat: ['Socks', 'Kiko'],
//   fish: ['Noodles'],
// }
const speciesLookup = pets.reduce((obj, pet) => {
  if (obj[pet.species]) {
    obj[pet.species].push(pet.name);
  } else {
    obj[pet.species] = [pet.name];
  }
  return obj;
}, {});
console.log(speciesLookup);
