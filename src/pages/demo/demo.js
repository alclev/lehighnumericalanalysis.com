import React from 'react';

async function Demo() {
  const importObject = {
    module: {},
    env: {
      memory: new WebAssembly.Memory({ initial: 256 }),
    }
  };

  WebAssembly.instantiateStreaming(
    fetch('main.wasm'),
    importObject
  ).then(result => {
    const Sum = result.instance.exports.Sum;
    console.log(Sum(4, 5));
    console.log(Sum(10, 10));
  });
  return (
    <div>
      <p>First trial of embedding webassembly</p>
      <p>Test</p>
    </div>
  );
}

export default Demo;
