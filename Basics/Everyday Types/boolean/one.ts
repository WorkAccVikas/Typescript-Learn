let x1 = true;

const x2: boolean = false;

console.log(x2.valueOf());

let x3: boolean = true;

x3 = 55; // !: Type 'number' is not assignable to type 'boolean'
