self.importScripts('add.js');

self.onmessage = (e) => {
  const [a, b] = e.data;
  const result = Module.ccall('add', 'number', ['number', 'number'], [a, b]);
  self.postMessage(result);
};
