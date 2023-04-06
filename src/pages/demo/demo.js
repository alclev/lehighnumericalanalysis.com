import React from 'react';

function Demo() {
  function instantiate(bytes, imports) {
    return WebAssembly.compile(bytes).then(m => new WebAssembly.Instance(m, imports));
  }
  var importObject = { imports: { i: arg => console.log(arg) } };  
  fetch('./add.wasm').then(response => response.arrayBuffer())
  .then(bytes => instantiate(bytes, importObject))
  .then(instance => instance.exports.e());
  return (
    <div>
      <p>First trial of embedding webassembly</p>
      <p>Test</p>
    </div>
  );
}

export default Demo;
