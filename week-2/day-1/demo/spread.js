/// Spread syntax

const inventory = {
  apple: 10,
  berry: 5,
  cherry: 16,
};

const inventoryCopy = { ...inventory };
console.log(inventoryCopy); // { apple: 10, berry: 5, cherry: 16 }

const fruits = ['apple', 'berry', 'cherry'];
const fruitsCopy = [...fruits];
console.log(fruitsCopy); // [ 'apple', 'berry', 'cherry' ]

const vowels = 'aeiou';
const vowelsArray = [...vowels];
console.log(vowelsArray); // [ 'a', 'e', 'i', 'o', 'u' ]

const moreFruits = [...fruits, 'durian'];
console.log(moreFruits); // [ 'apple', 'berry', 'cherry', 'durian' ]

const moreInventory = { ...inventory, durian: 1 };
console.log(moreInventory); // { apple: 10, berry: 5, cherry: 16, durian: 1 }

const veggies = ['asparagus', 'broccoli', 'carrot'];
const fruitsAndVeggies = [...fruits, ...veggies];
console.log(fruitsAndVeggies); // [ 'apple', 'berry', 'cherry', 'asparagus', 'broccoli', 'carrot' ]

const inventoryUpdate = { berry: 3, durian: 1 };
const updatedInventory = { ...inventory, ...inventoryUpdate };
console.log(updatedInventory); // { apple: 10, berry: 3, cherry: 16, durian: 1 }
