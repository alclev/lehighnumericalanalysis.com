import React, { useState, useEffect } from 'react';

function Demo() {
  const [wasmModule, setWasmModule] = useState(null);

  useEffect(() => {
    const loadWasm = async () => {
      const wasmModule = await import('./add.js');
      setWasmModule(wasmModule);
    };

    loadWasm();
  }, []);

  const add = (a, b) => {
    if (!wasmModule) {
      return 'Loading...';
    }

    return wasmModule.add(a, b);
  };

  return (
    <div className="App">
      <h1>WebAssembly Example</h1>
      <p>2 + 3 = {add(2, 3)}</p>
    </div>
  );
}

export default Demo;
