/// Working with nested data

// Output the value of each cell in a tic-tac-toe board:
const tictactoe = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', 'O', 'X'],
];

tictactoe.forEach((row) => {
  row.forEach((cell) => {
    console.log(cell);
    // Output:
    // X
    // O
    // X
    // O
    // X
    // O
    // X
    // O
    // X
  });
});

// Generate all possible coordinates for a 3x3 grid:
const width = 3;
const coordinates = [];
for (let row = 0; row < width; row++) {
  for (let col = 0; col < width; col++) {
    coordinates.push([row, col]);
  }
}
console.log(coordinates); // [ [ 0, 0 ], [ 0, 1 ], [ 0, 2 ], [ 1, 0 ], [ 1, 1 ], [ 1, 2 ], [ 2, 0 ], [ 2, 1 ], [ 2, 2 ] ]

// Generate Punnett square (https://en.wikipedia.org/wiki/Punnett_square) combinations for a given set of parents:
const plant1 = ['G', 'g'];
const plant2 = ['g', 'g'];

const potentialOffspring = [];
plant1.forEach((gene1) => {
  plant2.forEach((gene2) => {
    potentialOffspring.push(`${gene1}${gene2}`);
  });
});
console.log(potentialOffspring); // [ 'Gg', 'gg', 'gg', 'gg' ]
