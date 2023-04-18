extern "C" {
    int main() {
        return 0;
    }

    int add(int a, int b) {
        return a + b;
    }
}

/* emcc add.cpp -O3 -s WASM=1 -s EXPORTED_FUNCTIONS='["_add"]' -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' -o add.js
 */