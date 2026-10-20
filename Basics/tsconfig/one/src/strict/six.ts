// TOPIC: strictBindCallApply

function add(a: number, b: number): number {
  return a + b;
}

add.call(undefined, 10, 20); // Valid

add.call(undefined, '10', 20);
// ❌ Error: string is not assignable to number

add.call(undefined, 10);
// ❌ Error: expected 2 arguments

// ==========================================================

function add1(a: number, b: number): number {
  return a + b;
}

add1.apply(undefined, [10, 20]); // Valid

add1.apply(undefined, ['10', 20]);
// ❌ Error: string is not assignable to number

// ==========================================================
function add2(a: number, b: number): number {
  return a + b;
}

const addTen = add2.bind(undefined, 10);

addTen(20); // 30

addTen('20');
// ❌ Error: string is not assignable to number

// ==========================================================
interface User {
  name: string;
}

function greet(this: User, greeting: string): string {
  return `${greeting}, ${this.name}`;
}

const user: User = { name: 'Vikas' };

greet.call(user, 'Hello'); // Valid

greet.call(user, 123);
// ❌ Error: greeting must be a string

greet.call({ name: 'Vikas', age: 25 }, 'Hello');
// May be accepted: a User can have additional properties

export {};
