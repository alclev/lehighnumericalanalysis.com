/* This is an example c++ program for compiling and testing webassembly */

#include <emscripten/emscripten.h>

extern "C" {
  EMSCRIPTEN_KEEPALIVE int Sum(int a, int b) {
    return a + b;
  }
}

int main() {
    return 0;
}

/* 
    em++ -std=c++17 test.cpp -Os -s WASM=1 -s SIDE_MODULE=1 -s BINARYEN_ASYNC_COMPILATION=0 -o add.wasm
 */ 