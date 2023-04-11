/* This is an example c++ program for compiling and testing webassembly */

extern "C" {
    int add(int x, int y) {
        return x + y;
    }
}

/* 
    em++ -std=c++17 add.cpp -Os -s WASM=1 -s SIDE_MODULE=0 -s BINARYEN_ASYNC_COMPILATION=0 -o add.js
 */ 