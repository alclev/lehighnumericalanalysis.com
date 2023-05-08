export function drawMatrix(num_rows, num_cols, matrix_data) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
    // Set the size of the canvas to fit the matrix
    canvas.width = num_cols * 50;
    canvas.height = num_rows * 50;
  
    // Iterate through the rows and columns of the matrix
    for (let i = 0; i < num_rows; i++) {
      for (let j = 0; j < num_cols; j++) {
        // Draw a cell with a border
        ctx.beginPath();
        ctx.rect(j * 50, i * 50, 50, 50);
        ctx.stroke();
  
        // Display the element of the matrix in the cell
        ctx.font = '24px Arial';
        ctx.fillStyle = 'grey';
        ctx.textAlign = 'center';
        ctx.fillText(matrix_data[i * num_cols + j], j * 50 + 25, i * 50 + 35);
      }
    }
    return canvas;
  }

  // Returns true or false depending on whether matrix is correct format
export function parseMatrix(matrix) {
    
  
    return 
  }

// Define an array of button data, where each item contains a button label and a function ID
const buttonData = [
// Basic opertions (0x10 - 0x1F)
  { label: 'Add', func_id: 0x10 },
  { label: 'Multiply', func_id: 0x11 },
  { label: 'Transpose', func_id: 0x12 },
  { label: 'Inverse', func_id: 0x13 },
// Direct methods for solving (0x20 - 0x2F)
  { label: 'Gauss Elimination', func_id: 0x20 },
  { label: 'Blank', func_id: 0x21 },
  { label: 'Blank', func_id: 0x22 },
  { label: 'Blank', func_id: 0x23 },
// Indirect methods for solving (0x30 - 0x3F)
  { label: 'Jacobi Method', func_id: 0x30 },
  { label: 'Blank', func_id: 0x31 },
  { label: 'Blank', func_id: 0x32 },
  { label: 'Blank', func_id: 0x33 },
// Preconditioner (0x40 - 0x4F)
  { label: 'Blank', func_id: 0x40 },
  { label: 'Blank', func_id: 0x41 },
  { label: 'Blank', func_id: 0x42 },
  { label: 'Blank', func_id: 0x43 },
  

  { label: 'Gauss Elimination', func_id: 3 },
];
export default buttonData;




