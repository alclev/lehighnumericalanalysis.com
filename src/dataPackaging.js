export var dim_LIMIT = 25;

export function drawMatrix(matrixData, canvas, ctx) {
  if(typeof matrixData !== 'string') {
    console.error('Matrix data is not a string');
    return;
  }
  const dimensions = matrixData.split('\n')[0];
  const num_rows = parseInt(dimensions.split(',')[0]);
  const num_cols = parseInt(dimensions.split(',')[1]);
  const elements = matrixData.split('\n')[1];
  const data = elements.split(',');

  canvas.width = num_rows * 50;
  canvas.height = num_cols * 50;

  // Iterate through the rows and columns of the matrix
  for (let i = 0; i < num_rows; i++) {
    for (let j = 0; j < num_cols; j++) {
      // Draw a cell with a border
      ctx.beginPath();
      ctx.rect(i * 50, j * 50, 50, 50);
      ctx.stroke();

      // Display the element of the matrix in the cell
      ctx.font = '24px Arial';
      ctx.fillStyle = 'grey';
      ctx.textAlign = 'center';
      ctx.fillText(data[i * num_cols + j], i * 50 + 25, j * 50 + 35);
    }
  }
}

  // Returns true or false depending on whether matrix is correct format
export function parseMatrix(matrix) {
    // Check dimensions
    const dimensions = matrix.split('\n')[0];
    const num_rows = parseInt(dimensions.split(',')[0]);
    const num_cols = parseInt(dimensions.split(',')[1]);
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

// Define data format for json objects
export const packet = {
  'func_id': 0x00,
  'args': '',
  'matrix': '',
}




