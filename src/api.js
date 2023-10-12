import axios from 'axios';
// const axios = require('axios');

// const instance = axios.create({
//   baseURL: 'http://localhost:8080',
//   timeout: 1000,
//   headers: {'Content-Type': 'text/html; charset=utf-8'
// }

// });
// const socket = new WebSocket('ws://127.0.0.1:8080');

export const handleAddition = function (selectedFile, selectedFile2) {
  //data to send to backend
  const data = {
    operation: 0x10,
    args: 2,
    matrixData: selectedFile,
    secondMatrixData: selectedFile2,
  };
  // socket.onopen = (event) => {
  //   console.log('connected');
  //   socket.send(JSON.stringify(data));
  // }
  // socket.onmessage = (event) => {
  //   console.log(event.data);
  // }

  const options = {
    headers:{ 
      'Content-Type': 'application/json',}
  }
  axios.post('http://127.0.0.1:8080', data, options)
  .then(function (response) {
    console.log(response);
  })
  .catch((error) => {
    console.error('Error making POST request:', error);
  });
};

//the input to this function should validate that the inputs are valid numbers
export const handleMultiply = function (selectedFile, scalar) {
  //data to send to backend
  const data = {
    operation: 0x11,
    args: 2,
    matrixData: selectedFile,
    scalar: parseFloat(scalar),
  };
  return '2,2\n2,4,6,8';
};

export const handleTranspose = function (selectedFile) {
  //data to send to backend
  const data = {
    operation: 0x12,
    args: 1,
    matrixData: selectedFile,
  };
};

export const handleInverse = function (selectedFile) {
  //data to send to backend
  const data = {
    operation: 0x13,
    args: 1,
    matrixData: selectedFile,
  };
};
