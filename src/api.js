import axios from 'axios';

export const handleMultiply = function(selectedFile) {
    const scalarInput = document.getElementById('mult-input');
    const scalar = parseFloat(scalarInput.value); 
  
    if (isNaN(scalar)) {
      //todo
      return;
    }
  
    //data to send to backend
    const data = {
      matrixData: selectedFile,
      scalar: scalar,
    };
  
    // Make a POST to API
    axios.post('/api/multiply', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
}