// --- JavaScript (for comparison, would crash at runtime) ---
// let value1 = "hello";
// value1 = 34;
// value1.toUpperCase();   // TypeError: value1.toUpperCase is not a function

// --- any: checking is switched off ---
let value2: any = "hello";
value2 = 34;
// value2.toUpperCase();   // no error in the editor, but crashes at runtime

// --- unknown: must check the type first ---
let value3: unknown = "hello";
value3 = 34;
// value3.toUpperCase();   // error: 'value3' is of type 'unknown'

if (typeof value2 === "string") {
  console.log(value2.toUpperCase()); // ok, narrowed to string
} else {
  console.log("not a string"); // runs, because value3 is 34
}

// --- Practice: safe JSON reading ---
function parseJson(input: string): unknown {
  return JSON.parse(input);
}

const data = parseJson('{"name":"Anu"}');
// data.name;              // error, because data is unknown

// Narrowing the data here
if (typeof data === "object" && data !== null && "name" in data) {
  if (typeof data.name === "string") {
    console.log(data.name.toUpperCase());
  }
}
