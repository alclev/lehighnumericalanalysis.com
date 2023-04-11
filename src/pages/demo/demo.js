import React from 'react';

function Demo() {
  fetch('./add.js')
  .then(response => response.arrayBuffer())
  .then(buffer => WebAssembly.instantiate(buffer))
  .then(instance => {
    const add = instance.exports._add; // Get the exported "add" function
    const result = add(3, 5); // Call the "add" function with two arguments
    console.log(result); // Output: 8
  });
}

export default Demo;
