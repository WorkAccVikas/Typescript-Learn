type A = keyof any; // string | number | symbol

// DESC: (INBUILT) any valid JavaScript object property key.
type B = PropertyKey;

let key1: PropertyKey = 'name'; // ✅ string
let key2: PropertyKey = 123; // ✅ number
let key3: PropertyKey = Symbol(); // ✅ symbol

let key4: PropertyKey = true; // ❌

let key11: A = 'name'; // ✅ string
let key12: A = 123; // ✅ number
let key13: A = Symbol(); // ✅ symbol

let key14: A = true; // ❌

export {};

// LINK : https://youtu.be/AV5vwKymd4Y?si=appHX57BFIRud7-z
