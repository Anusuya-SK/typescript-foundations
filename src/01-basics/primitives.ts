// The pattern is, name: type = value;

let age: number = 25;
let username: string = "Anu";
let isActive: boolean = true;
let nothing: null = null;
let notset: undefined = undefined;

let score: number = 10;
score = "high"; // string to number

const x: number = null; // possible only with strict off

let count = 0; // inferred: number
count = "five"; // error, even though you never wrote ": number"

const city = "Chennai"; // inferred: "Chennai"
