import axios from 'axios';
export const DELIMITER = 'XXXXXXXX';

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
  axios.post('http://lehighnumericalanalysis.com/ws', data, options)
    .then(function (response) {
      console.log(response);
      console.log(response.data);
      const json_str = JSON.stringify(response);
      return json_str.data;
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
    matrixData: matrixA + DELIMITER + parseFloat(scalar),
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

export const handleTranspose = function (matrixA) {
  //data to send to backend
  const data = {
    operation: 0x12,
    args: 1,
    matrixData: matrixA,
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

export const handleInverse = function (matrixA) {
  //data to send to backend
  const data = {
    operation: 0x13,
    args: 1,
    matrixData: matrixA,
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

export const handleGaussElimination = function (matrixA,vectorB) {
  //data to send to backend
  const data = {
    operation: 0x20,
    args: 2,
    matrixData: matrixA + DELIMITER + vectorB
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

export const handleLuFactorization = function (matrixA,vectorB) {
  //data to send to backend
  const data = {
    operation: 0x21,
    args: 2,
    matrixData: matrixA + DELIMITER + vectorB
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

export const handleJacobiMethod = function (matrixA,vectorB) {
  //data to send to backend
  const data = {
    operation: 0x30,
    args: 2,
    matrixData: matrixA + DELIMITER + vectorB
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

export const handleGaussSidel = function (matrixA,vectorB) {
  //data to send to backend
  const data = {
    operation: 0x31,
    args: 2,
    matrixData: matrixA + DELIMITER + vectorB
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