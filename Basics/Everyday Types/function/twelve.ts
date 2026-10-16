type A<T> = (x: T) => T; // Generic type belongs to the type alias
type B = <T>(x: T) => T; // Generic type belongs to the function

const identity: A<number> = (x) => x;

identity(10); // ✅ number
identity(20); // ✅ number
identity('hello'); // ❌ Error

const identity1: B = (x) => x;

identity1(10); // ✅ number
identity1('hello'); // ✅ string
identity1(true); // ✅ boolean

export {};
