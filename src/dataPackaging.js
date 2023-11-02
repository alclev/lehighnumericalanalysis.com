export var dim_LIMIT = 20;

export function drawMatrix(matrixData, canvas, ctx) {
  if(typeof matrixData !== 'string') {
    throw new Error('Matrix data is not a string');
  }
  console.log(matrixData);
  const dimensions = matrixData.split('\n')[0];
  const num_rows = parseInt(dimensions.split(',')[0]);
  const num_cols = parseInt(dimensions.split(',')[1]);
  const elements = matrixData.split('\n')[1];
  const data = elements.split(',');

  let BOX_SIZE = 100;

  canvas.width = num_rows * BOX_SIZE;
  canvas.height = num_cols * BOX_SIZE;

  // Iterate through the rows and columns of the matrix
  for (let i = 0; i < num_rows; i++) {
    for (let j = 0; j < num_cols; j++) {
      // Draw a cell with a border
      ctx.beginPath();
      ctx.rect(i * BOX_SIZE, j * BOX_SIZE, BOX_SIZE, BOX_SIZE);
      ctx.stroke();

      // Display the element of the matrix in the cell
      ctx.font = '24px Arial';
      ctx.fillStyle = 'grey';
      ctx.textAlign = 'center';
      ctx.fillText(data[i * num_cols + j], i * BOX_SIZE + BOX_SIZE / 2, j * BOX_SIZE + BOX_SIZE / 2);
    }
  }
}

  // Returns true or false depending on whether matrix is correct format
export function parseMatrix(matrix) {
    // Check dimensions
    console.log("parseMatrix");
    console.log(matrix);
    const dimensions = matrix.split('\n')[0];
    console.log(dimensions);
    const num_rows = parseInt(dimensions.split(',')[0]);
    const num_cols = parseInt(dimensions.split(',')[1]);
    console.log(num_rows, num_cols);
    if (isNaN(num_rows) || isNaN(num_cols)) {
      return false;
    }
    if (num_rows > dim_LIMIT || num_cols > dim_LIMIT || num_rows < 1 || num_cols < 1) {
      return false;
    }
    // Check elements
    const elements = matrix.split('\n')[1];
    const elements_array = elements.split(',');
    if (elements_array.length !== num_rows * num_cols) {
      return false;
    }
    for (let i = 0; i < elements_array.length; i++) {
      console.log(elements_array[i]);
      if (isNaN(parseInt(elements_array[i]))) {
        return false;
      }
    }
    return true;
  }

// Define an array of button data, where each item contains a button label and a function ID
export const buttonData = [
// Basic opertions (0x10 - 0x1F)
  { label: 'Add', func_id: 0x10 },
  { label: 'Multiply', func_id: 0x11 },
  { label: 'Transpose', func_id: 0x12 },
  { label: 'Inverse', func_id: 0x13 },
// Direct methods for solving (0x20 - 0x2F)
  { label: 'Gauss Elimination', func_id: 0x20 },
  { label: 'LU factorization', func_id: 0x21 },
  // { label: 'TBD', func_id: 0x22 },
  // { label: 'TBD', func_id: 0x23 },
// Indirect methods for solving (0x30 - 0x3F)
  { label: 'Jacobi Method', func_id: 0x30 },
  { label: 'Gauss Siedel', func_id: 0x31 },
  // { label: 'TBD', func_id: 0x32 },
  // { label: 'TBD', func_id: 0x33 },
// Preconditioner (0x40 - 0x4F)
  // { label: 'TBD', func_id: 0x40 },
  // { label: 'TBD', func_id: 0x41 },
  // { label: 'TBD', func_id: 0x42 },
  // { label: 'TBD', func_id: 0x43 },
];

export const sparseButtonData = [
    { label: 'Sparse Add', func_id: 0xA0 },
    { label: 'Sparse Matrix Multiply', func_id: 0xA1 },
    { label: 'Sparse Transpose', func_id: 0xA2 },
    { label: 'Sparse Approximate Inverse', func_id: 0xA3 },
  // Direct methods for solving 
    { label: 'Sparse Gauss Elimination', func_id: 0xB0 },
    { label: 'Sparse LU factorization', func_id: 0xB1 },
  // Indirect methods for solving 
    { label: 'Sparse Jacobi Method', func_id: 0xC0 },
   // { label: 'Sparse Gauss Siedel', func_id: 0xC1 },
  ];

// Define data format for json objects
export const packet = {
  'func_id': 0x00,
  'args': '',
  'matrix': '',
}

export function drawSparseMatrix(matrixData, canvas, ctx) {
  if (typeof matrixData !== 'string') {
    throw new Error('Matrix data is not a string');
  }

  const lines = matrixData.split('\n');

  // Find the number of rows and columns while skipping comments
  let num_rows, num_cols;
  let data = {}; // Use an object to store sparse data

  for (let line of lines) {
    if (line.startsWith('%')) {
      // Skip comments
      continue;
    } else if (!num_rows) {
      // Parse dimensions from the first non-comment line
      const dimensions = line.split(' ');
      num_rows = parseInt(dimensions[0]);
      num_cols = parseInt(dimensions[1]);
    } else {
      // Parse data
      const elements = line.split(' ');
      const row = parseInt(elements[0]) - 1; // Adjust for 1-based indexing
      const col = parseInt(elements[1]) - 1; // Adjust for 1-based indexing
      const value = parseFloat(elements[2]).toFixed(2); // Limit to 2 decimal points
      data[`${row}-${col}`] = value;
    }
  }

  let BOX_SIZE = 100;

  canvas.width = num_cols * BOX_SIZE;
  canvas.height = num_rows * BOX_SIZE;

  // Iterate through the rows and columns of the matrix
  for (let i = 0; i < num_rows; i++) {
    for (let j = 0; j < num_cols; j++) {
      // Draw a cell with a border
      ctx.beginPath();
      ctx.rect(j * BOX_SIZE, i * BOX_SIZE, BOX_SIZE, BOX_SIZE);
      ctx.stroke();

      // Display the element of the matrix in the cell
      ctx.font = '24px Arial';
      ctx.fillStyle = 'grey';
      ctx.textAlign = 'center';

      const value = data[`${i}-${j}`];
      ctx.fillText(value || '0.00', j * BOX_SIZE + BOX_SIZE / 2, i * BOX_SIZE + BOX_SIZE / 2);
    }
  }
}
