import React, { useEffect } from 'react';

function Demo() {
  useEffect(() => {
    // Load the add.wasm module
    fetch(process.env.PUBLIC_URL + '/add.wasm')
      .then((response) => response.arrayBuffer())
      .then((buffer) =>
        WebAssembly.instantiate(buffer, {
          env: {
            memoryBase: 0,
            tableBase: 0,
            memory: new WebAssembly.Memory({ initial: 256 }),
            table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' }),
          },
        }),
      )
      .then((module) => {
        // Get a reference to the _add function
        const add = module.instance.exports._add;

        // Call the _add function and print the result
        const result = add(2, 3);
        console.log(result); // Output: 5
      })
      .catch((error) => {
        console.log('Error caught: ', error);
      });
  }, []);

  return (
    <div>
      <h1>WebAssembly Demo</h1>
    </div>
  );
}

export default Demo;
