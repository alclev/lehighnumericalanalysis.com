import axios from 'axios';
export const DELIMITER = '0xDEADBEEF';
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
    matrixData: selectedFile + DELIMITER + selectedFile2,
  };

  const options = {
    headers:{ 
      'Content-Type': 'application/json',}
  }
  axios.post('http://lehighnumericalanalysis.com/ws', data, options)
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
    matrixData: selectedFile + DELIMITER + parseFloat(scalar),
  };
  const options = {
    headers:{ 
      'Content-Type': 'application/json',}
  }
  axios.post('http://lehighnumericalanalysis.com/ws', data, options)
    .then(function (response) {
      console.log(response);
    })
    .catch((error) => {
      console.error('Error making POST request:', error);
    });
};

export const handleTranspose = function (selectedFile) {
  //data to send to backend
  const data = {
    operation: 0x12,
    args: 1,
    matrixData: selectedFile,
  };
  const options = {
    headers:{ 
      'Content-Type': 'application/json',}
  }
  axios.post('http://lehighnumericalanalysis.com/ws', data, options)
    .then(function (response) {
      console.log(response);
    })
    .catch((error) => {
      console.error('Error making POST request:', error);
    });
};

export const handleInverse = function (selectedFile) {
  //data to send to backend
  const data = {
    operation: 0x13,
    args: 1,
    matrixData: selectedFile,
  };
  const options = {
    headers:{ 
      'Content-Type': 'application/json',}
  }
  axios.post('http://lehighnumericalanalysis.com/ws', data, options)
    .then(function (response) {
      console.log(response);
    })
    .catch((error) => {
      console.error('Error making POST request:', error);
    });
};
