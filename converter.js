// test.js
import { main } from "./main.js"; // import your main function

// Helper function to run a test
function runTest(binaryInput, expectedHex) {
    const result = main(binaryInput, 2, 16);
    if (result === expectedHex) {
        console.log(`✅ Test passed: ${binaryInput} -> ${result}`);
    } else {
        console.error(`❌ Test failed: ${binaryInput} -> ${result}, expected ${expectedHex}`);
    }
}

// List of test cases: [binary, expectedHex]
const tests = [
    ["0", "0"],
    ["1", "1"],
    ["1010", "A"],
    ["1111", "F"],
    ["11111011", "FB"],
    ["100110101", "135"], // 9 bits -> 135 hex
    ["1101010101", "355"] // 10 bits -> 355 hex
];

// Run all tests
for (const [binary, expectedHex] of tests) {
    runTest(binary, expectedHex);
}