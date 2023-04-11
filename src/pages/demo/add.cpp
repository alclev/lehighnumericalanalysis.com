extern "C" {
    int main() {
        return 0;
    }

    int add(int a, int b) {
        return a + b;
    }
}

/* emcc add.cpp -s WASM=1 -s EXPORTED_FUNCTIONS="['_add']" -o add.wasm */