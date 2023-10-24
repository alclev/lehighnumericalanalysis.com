import axios from 'axios';
export const DELIMITER = 'XXXXXXXX';

/* Steps to scale functions: 

Add implement functions in 
FRONTEND: api.js demo.js 
BACKEND: map_func

*/

export const handleAddition = function (matrixA, matrixB) {
  //data to send to backend
  const data = {
    operation: 0x10,
    args: 2,
    data: matrixA + DELIMITER + matrixB + DELIMITER,
  };

  const options = {
    headers:{ 
      'Content-Type': 'application/json',}
  }
  /* return the entire promise */
  return axios
    .post('http://lehighnumericalanalysis.com/ws', data, options)
    .then(function (response) {
      console.log(response);
      console.log(response.data.data);
      return response.data.data;
    })
    .catch((error) => {
      console.error('Error making POST request:', error);
    });
};

//the input to this function should validate that the inputs are valid numbers
export const handleMultiply = function (matrixA, scalar) {
  //data to send to backend
  const data = {
    operation: 0x11,
    args: 2,
    data: matrixA + DELIMITER + scalar + DELIMITER,
  };

  const options = {
    headers:{ 
      'Content-Type': 'application/json',}
  }
  /* return the entire promise */
  return axios
    .post('http://lehighnumericalanalysis.com/ws', data, options)
    .then(function (response) {
      console.log(response);
      console.log(response.data.data);
      return response.data.data;
    })
    .catch((error) => {
      console.error('Error making POST request:', error);
    });
};

export const handleTranspose = function (matrixA) {
  
};

export const handleInverse = function (matrixA) {
 
};

export const handleGaussElimination = function (matrixA,vectorB) {
  
};

export const handleLuFactorization = function (matrixA,vectorB) {
  
};

export const handleJacobiMethod = function (matrixA,vectorB) {
  
};

export const handleGaussSidel = function (matrixA,vectorB) {
  
};