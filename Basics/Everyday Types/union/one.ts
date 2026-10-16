type Theme = 'light' | 'dark'; // Literal Type

const theme: Theme = 'light';

type User = {
  name: string;
};

type Emp = {
  username: string;
  salary: number;
};

type Person = User | Emp;

const x10: Person = {}; // !: Type '{}' is not assignable to type 'Person'
const x1: Person = {
  name: 'v1',
  salary: 5, // TypeScript checks whether every property in the object exists in at least one member of the union.
};
const x2: Person = {
  name: 'v1',
  age: 5, // !: Object literal may only specify known properties, and 'age' does not exist in type 'Person'
};
const x3: Person = {
  name: 'v1',
};
const x4: Person = {
  username: 'a1',
  salary: 500,
};
const x8: Person = {
  name: 'v1',
  username: 'a1',
  salary: 500,
};

// ==================================================================================================

// If you want "exactly one"
type User1 = {
  type: 'user';
  name: string;
};

type Emp1 = {
  type: 'emp';
  username: string;
  salary: number;
};

type Person1 = User1 | Emp1;

const x11: Person1 = {}; // !: Type '{}' is not assignable to type 'Person1'

// !: type is missing
const x12: Person1 = {
  name: 'v1',
};

const x5: Person1 = {
  type: 'user',
  name: 'v1',
  salary: 5, // !: Object literal may only specify known properties, and 'salary' does not exist in type 'User1'
};
const x6: Person1 = {
  type: 'user',
  name: 'v1',
};
const x7: Person1 = {
  type: 'emp',
  username: 'b1',
  salary: 12,
};

// https://chatgpt.com/share/6a666930-ec20-83ee-981f-5dee468ce1b9 👇
type Without<T, U> = {
  [P in Exclude<keyof T, keyof U>]?: never;
};

type XOR<T, U> = (T & Without<U, T>) | (U & Without<T, U>);

type Person2 = XOR<User, Emp>;

const x9: Person2 = {}; // !: Type '{}' is not assignable to type 'Person2'.

const x13: Person2 = {
  name: 'v1',
};

// !: Types of property salary are incompatible.
const x15: Person2 = {
  name: 'v1',
  salary: 1200,
};
const x16: Person2 = {
  name: 'v1',
  age: 12, // !: Object literal may only specify known properties, and 'age' does not exist in type 'User & Without<Emp, User>'
};

const x14: Person2 = {
  username: 'b1',
  salary: 23,
};
const x17: Person2 = {
  username: 'b1',
  salary: 23,
  name: 55, // !: Type 'number' is not assignable to type 'string'
};

// !: Types of property name are incompatible.
const x18: Person2 = {
  username: 'b1',
  salary: 23,
  name: 'vse',
};

export {};
