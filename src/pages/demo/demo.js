function Demo() {
  // Load the add.js module
  fetch('add.wasm')
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.instantiate(buffer))
    .then(module => {
      // Get a reference to the _add function
      const add = module.instance.exports.add;

      // Call the _add function and print the result
      const result = add(2, 3);
      console.log(result); // Output: 5
    })
    .catch(error => {
      console.log('Error caught: ', error);
    });
}

export default Demo;
