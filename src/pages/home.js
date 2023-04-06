import React, { useEffect } from 'react';
import logo from '../logo.svg';
import './home.css';

function Home() {
  useEffect(() => {
    // Get the canvas element and context
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    // Define the matrix data
    const matrix = [
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
    ];

    // Set the size of the canvas to fit the matrix
    canvas.width = matrix[0].length * 50;
    canvas.height = matrix.length * 50;

    // Iterate through the rows and columns of the matrix
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        // Draw a cell with a border
        ctx.beginPath();
        ctx.rect(j * 50, i * 50, 50, 50);
        ctx.stroke();

        // Display the element of the matrix in the cell
        ctx.font = '24px Arial';
        ctx.fillStyle = 'grey';
        ctx.textAlign = 'center';
        ctx.fillText(matrix[i][j], j * 50 + 25, i * 50 + 35);
      }
    }
  }, []);

  return (
    <div>
      <canvas id="matrix-canvas"></canvas>
      <img src={logo} className="Home-logo1" alt="logo" />
      <img src={logo} className="Home-logo2" alt="logo" />
    </div>
  );
}

export default Home;
