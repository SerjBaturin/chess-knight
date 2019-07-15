/* eslint-env browser */
import './sass/styles.scss';

// The knightMoves function returns possible moves of a chess knight in the allMoves array
// Movement is determined by counting the cells of the field along the 'X' and 'Y' axes
// from the position of the figure
const knightMoves = (now) => {
  // Define an array for all possible moves
  const allMoves = [];

  // Define an array of movements along the 'X' axis
  const xMoves = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  // Determine the coordinates of the knight along the 'X' axis
  const X = xMoves.indexOf(now[0]) + 1;

  // Determine the coordinates along the 'Y' axis
  const Y = parseInt(now[1], 10);

  // Determine the stroke length along the axes and filter inappropriate values
  const xPosition = [X + 2, X - 2, X + 1, X - 1]
    .filter(position => position > 0 && position < 9);
  const yPosition = [Y + 2, Y - 2, Y + 1, Y - 1]
    .filter(position => position > 0 && position < 9);

  // Calculate each turn of the knight
  // To get the move of the figure, it is necessary to observe the condition: every move - three cells
  // All satisfying options are written to the allMoves array
  let i;
  let j;
  for (i = 0; i < xPosition.length; i += 1) {
    for (j = 0; j < yPosition.length; j += 1) {
      if (Math.abs(X - xPosition[i]) + Math.abs(Y - yPosition[j]) === 3) {
        allMoves.push(xMoves[xPosition[i] - 1] + yPosition[j]);
      }
    }
  }
  // Return all possible moves
  return allMoves;
};

// Define button's handler
const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const knight = document.getElementById('horse').value.toLowerCase(); // Get value from user
  const p = document.getElementById('out');
  const regex = /[AaBbCcDdEeFfGgHh][1-8]/; // Check incoming parameters
  const isexist = regex.test(knight);
  if (isexist === true) {
    p.innerHTML = knightMoves(knight).join(', ').toUpperCase(); // Call the knightMoves function
  } else {
    p.innerHTML = 'There is no such value';
  }
});
