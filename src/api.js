const socket = new WebSocket('ws://localhost:8080');

export const handleAddition = function (selectedFile, selectedFile2) {
  //data to send to backend
  const data = {
    operation: 0x10,
    args: 2,
    matrixData: selectedFile,
    secondMatrixData: selectedFile2,
  };
  console.log(JSON.stringify(selectedFile));
  socket.send(data);
  // Make a POST to API
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
