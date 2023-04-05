import React from 'react';

async function Demo() {
  const importObject = {
    module: {},
    env: {
      memory: new WebAssembly.Memory({ initial: 256 }),
    }
  };
  fetch('add.wasm').then(response =>
    response.arrayBuffer()
  ).then(bytes =>
    WebAssembly.instantiate(bytes, importObject)
  ).then(results => {
    const Sum = results.instance.exports.Sum;
    console.log(Sum(2,3));
    console.log(Sum(1000, 23));
  });
  return (
    <div>
      <p>First trial of embedding webassembly</p>
      <p>Test</p>
    </div>
  );
}

export default Demo;
