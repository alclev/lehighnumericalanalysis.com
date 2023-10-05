// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://localhost:8080',
//   timeout: 1000,
//   headers: {'Content-Type': 'text/html; charset=utf-8'
// }

// });
const axios = require('axios');

export const handleAddition = function (selectedFile, selectedFile2) {
  //data to send to backend
  const data = {
    operation: 0x10,
    args: 2,
    matrixData: selectedFile,
    secondMatrixData: selectedFile2,
  };
  axios({
    method: 'post',
    url: 'http://127.0.0.1:8080',
    data: data,
    withCredentials: false,
  })
    .then((response) => {
      // Handle the success response here
      console.log('POST request successful:', response.data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
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
