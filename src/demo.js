import React, { useState, useEffect } from 'react';

function Demo() {
  const [worker, setWorker] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const worker = new Worker('./workers/addWorker.js', { type: 'module' });
    setWorker(worker);

    worker.onmessage = (e) => {
      setResult(e.data);
    };

    return () => {
      worker.terminate();
    };
  }, []);

  const add = (a, b) => {
    if (!worker) {
      return 'Loading...';
    }

    worker.postMessage([a, b]);
  };

  useEffect(() => {
    add(2, 3);
  }, [worker]);

  return (
    <div className="App">
      <h1>WebAssembly Example</h1>
      <p>2 + 3 = {result === null ? 'Loading...' : result}</p>
    </div>
  );
}

export default Demo;
