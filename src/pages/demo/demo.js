import React from 'react';

async function Demo() {
  const importObject = {
    imports: { imported_func: (arg) => console.log(arg) },
  };
  let result = 0;
  WebAssembly.instantiateStreaming(fetch("add.wasm"), importObject).then(
    (obj) => result = obj.instance.exports.exported_func(2, 2)
  );

  return (
    <div>
      <p>First trial of embedding webassembly</p>
      <p>Result: {result}</p>
    </div>
  );
}

export default Demo;
