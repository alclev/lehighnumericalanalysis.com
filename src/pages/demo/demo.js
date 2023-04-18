import React, { useEffect } from 'react';

function Demo() {
  useEffect(() => {
    // Load the add.js module
    const script = document.createElement('script');
    script.src = 'add.js';
    script.async = true;
    script.onload = () => {
      // Get a reference to the _add function
      const add = window.Module.cwrap('add', 'number', ['number', 'number']);

      // Call the _add function and print the result
      const result = add(2, 3);
      console.log(result); // Output: 5
    };
    script.onerror = (error) => {
      console.log('Error caught: ', error);
    };
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>WebAssembly Demo</h1>
    </div>
  );
}

export default Demo;
