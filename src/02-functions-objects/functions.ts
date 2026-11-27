export {};
// ============================================================
// 1. JavaScript first (for comparison)
// ============================================================
// const add = (a, b) => a + b;
// console.log(add(2, 3));    // 5
// console.log(add("2", 3));  // "23" (string joined, not added)
// console.log(add(2));       // NaN (b is undefined)

// ============================================================
// 2. TypeScript: parameter and return types
// ============================================================
const add = (a: number, b: number): number => a + b;
console.log(add(2, 3)); // 5
// add("2", 3);         // error:
// add(2);              // error:

// ============================================================
// 3. Function declaration style
// ============================================================
function multiply(a: number, b: number): number {
  return a * b;
}
console.log(multiply(4, 5)); // 20

// ============================================================
// 4. Optional parameter (?)
// Rule: optional parameters must come after required ones
// ============================================================
const greet = (name: string, title?: string): string =>
  title ? `${title} ${name}` : name;
console.log(greet("Anu")); // Anu
console.log(greet("Anu", "Dr.")); // Dr. Anu

// ============================================================
// 5. Default parameter
// ============================================================
const welcome = (name: string, greeting: string = "Hello"): string =>
  `${greeting} ${name}`;
console.log(welcome("Anu")); // Hello, Anu
console.log(welcome("Anu", "Hi")); // Hi, Anu

// ============================================================
// 6. void return type
// void means the function returns nothing
// ============================================================
const logMessage = (msg: string): void => console.log(msg);
logMessage("done");
