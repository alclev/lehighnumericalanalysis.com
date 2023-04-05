import React, { useEffect, useState } from 'react';

function Demo() {
  const [result, setResult] = useState('');

  useEffect(() => {
    // Load the WebAssembly module
    WebAssembly.instantiateStreaming(fetch('add.wasm'))
      .then(module => {
        // Call the add function exported from the module
        const result = module.instance.exports.add(2, 2);
        setResult(`The result of 2 + 2 is ${result}.`);
        console.log(`The result of 2 + 2 is ${result}.`)
      });
  }, []);

  return (
    <div>
      <p>First trial of embedding webassembly</p>
      <p>test {result}</p>
    </div>
  );
}

export default Demo;
