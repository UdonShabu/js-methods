// 🥉 Rotates it 90 degrees clockwise
function rotateMatrix(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Create an array with the columns from the original matrix
  const columns = Array.from({ length: numCols }, (_, colIndex) =>
    Array.from({ length: numRows }, (_, rowIndex) => matrix[rowIndex][colIndex])
  );

  return columns.map((column) => column.reverse());
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const rotatedMatrix = rotateMatrix(matrix);
console.log(rotatedMatrix);
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ];
