import axios from 'axios';

const routeToHit = 'api';

export const handleAddition = function (selectedFile, selectedFile2) {
  //data to send to backend
  const data = {
    operation: "0x4",
    matrixData: selectedFile,
    secondMatrixData: selectedFile2,
  };
  // Make a POST to API
  axios.post('/api/add', data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

//the input to this function should validate that the inputs are valid numbers
export const handleMultiply = function (selectedFile, scalar) {
  //data to send to backend
  const data = {
    matrixData: selectedFile,
    scalar: parseFloat(scalar),
  };
  // Make a POST to API
  axios.post('/api/multiply', data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export const handleTranspose = function (selectedFile) {
  //data to send to backend
  const data = {
    matrixData: selectedFile,
  };
  // Make a POST to API
  axios.post('/api/tranpose', data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export const handleInverse = function (selectedFile) {
  //data to send to backend
  const data = {
    matrixData: selectedFile,
  };
  // Make a POST to API
  axios.post('/api/inverse', data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
