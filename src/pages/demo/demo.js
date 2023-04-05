import React from 'react';
import add from './add.wasm';

async function Demo() {
  let result = 0;
  WebAssembly.instantiateStreaming(fetch("add.wasm"), add).then(
    (results) => {
      console.log(results.instance.exports.add(1, 2));
    }
  );  

  return (
    <div>
      <p>First trial of embedding webassembly</p>
      <p>test {result}</p>
    </div>
  );
}

export default Demo;
