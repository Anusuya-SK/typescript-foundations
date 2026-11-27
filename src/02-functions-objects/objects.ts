export {};

// ============================================================
// IDEA: object types
// An object type describes the SHAPE of an object: which
// properties it has and the type of each one.
//   Pattern: { property: type; property: type }
// - ?        makes a property optional (value is T | undefined)
// - readonly blocks reassignment after creation
// TypeScript then catches typos, missing, extra and wrong-type
// properties while you type, instead of at runtime.
// ============================================================

// ============================================================
// 1. JavaScript first (for comparison)
// ============================================================
// const user = { name: "Anu", age: 25 };
// console.log(user.nmae);    // undefined (typo, no warning)
// user.age = "twenty";       // allowed, age is now a string

// ============================================================
// 2. TypeScript: object type
// ============================================================
const user: { name: string; age: number } = { name: "Anu", age: 25 };
console.log(user.name); // Anu
//console.log(user.nmae); // error:
// user.age = "twenty";     // error:

// ============================================================
// 3. Optional property (?)
// ============================================================
const user2: { name: string; age: number; email?: string } = {
  name: "Anu",
  age: 25,
};
console.log(user2.email); // undefined, type is string | undefined

// ============================================================
// 4. readonly property
// ============================================================
const product: { readonly id: number; name: string; price: number } = {
  id: 1,
  name: "Honda",
  price: 200000,
};
product.name = "Yamaha"; // ok
product.price = 190000; // ok
// product.id = 2;      // error:
