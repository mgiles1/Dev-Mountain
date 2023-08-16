/// Objects

const inventory = {
  apple: 10,
  berry: 5,
  cherry: 16,
};
delete inventory.berry;
console.log(inventory); // { apple: 10, cherry: 16 }

for (const fruit in inventory) {
  console.log(fruit, inventory[fruit]);
  // Output:
  // apple 10
  // cherry 16
}

const inventoryKeys = Object.keys(inventory);
console.log(inventoryKeys); // [ 'apple', 'cherry' ]
inventoryKeys.forEach((fruit) => {
  console.log(fruit, inventory[fruit]);
  // Output:
  // apple 10
  // cherry 16
});

const inventoryValues = Object.values(inventory);
console.log(inventoryValues); // [ 10, 16 ]

const target = { apple: 1, berry: 2 };
const source = { berry: 3, cherry: 4 };
const merged = Object.assign(target, source);
console.log(merged); // { apple: 1, berry: 3, cherry: 4 }

const inventoryCopy = { ...inventory };
console.log(inventoryCopy); // { apple: 10, cherry: 16 }
