#include <emscripten/bind.h>

using namespace emscripten;

int add(int a, int b) {
  return a + b;
}

EMSCRIPTEN_BINDINGS(my_module) {
  function("add", &add);
}


/* emcc add.cpp -O3 -s WASM=1 -s EXPORTED_FUNCTIONS='["_add"]' -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' -o add.js
 */

/* emcc add.cc -o add.js -s EXPORTED_RUNTIME_METHODS=['ccall'] -s EXPORTED_FUNCTIONS=['_add'] -s EXTRA_EXPORTED_RUNTIME_METHODS=['ccall','cwrap'] --bind
 */

/* emcc add.cc -o public/add.js -s EXPORTED_RUNTIME_METHODS=['ccall','cwrap'] --bind
 */