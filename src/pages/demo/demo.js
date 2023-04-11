

function Demo() {
  // Load the add.js module
  fetch('add.js')
  .then(response => response.arrayBuffer())
  .then(buffer => WebAssembly.instantiate(buffer))
  .then(module => {
    // Get a reference to the _add function
    const add = module.instance.exports._add;

    // Call the _add function and print the result
    const result = add(2, 3);
    console.log(result); // Output: 5
  });

}

export default Demo;
