// TOPIC: Basic Generic

function getValue<T, U extends keyof T>(object: T, key: U): T[U] {
  return object[key];
}

const obj1 = { a: 1, b: 2 };

const x1 = getValue(obj1, 'a'); // 1
const x2 = getValue(obj1, 'm'); // undefined

export {};
