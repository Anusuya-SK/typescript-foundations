// JavaScript: a plain array
const user1 = ["Anu", 25];

// TypeScript: a regular array type
const user2: (string | number)[] = ["Anu", 25];

// TypeScript: a tuple
const user3: [string, number] = ["Anu", 25];

// What the tuple catches
const user: [string, number] = ["Anu", 25];

// const a: [string, number] = [25, "Anu"];  // Type 'number' is not assignable to type 'string'
// const b: [string, number] = ["Anu"];      // Source has 1 element(s) but target requires 2
// const c: [string, number] = ["Anu", 25, 1]; // Source has 3 element(s) but target allows only 2
// user3[2];                                  // Tuple type '[string, number]' of length '2' has no element at index '2'

// When to use one
// A tuple fits when you have a small, fixed group of related values where position carries the meaning, such as a coordinate or a name/value pair
// If the data has labels (name, age), an object is usually clearer. Tuples are best for short, obvious pairs.

// Named elements (only helps readability)
const user4: [name: string, age: number] = ["Anu", 25];

// Optional element
const pair: [string, number?] = ["Anu"];
const second = pair[1]; // hover: number | undefined, because the element is optional

// Read-only: can't be changed after creation
const fixed: readonly [string, number] = ["Anu", 25];

// fixed[0] = "Anu";   // error: Cannot assign to '0' because it is a read-only property

// Destructuring
const [productName, price]: [string, number] = ["Honda", 200000];
