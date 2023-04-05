/* This is an example c++ program for compiling and testing webassembly */

extern "C" {
    int add(int x, int y) {
        return x + y;
    }
}

int main() {
    // your code here
    return 0;
}

/* 
    em++ -O3 test.cpp -o add.wasm
 */ 