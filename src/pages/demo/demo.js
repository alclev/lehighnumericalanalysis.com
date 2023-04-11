

function Demo() {
  add = Module.cwrap('add', 'number', ['number', 'number']);
  console.log(add(1, 2));

}

export default Demo;
