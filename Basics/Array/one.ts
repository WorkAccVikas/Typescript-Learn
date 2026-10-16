// Array of Numbers
const friends1: number[] = [];

const n1: number[] = [22];
const n2: number[] = [];
const n3: Array<string> = []; // Array of Strings

n1.push(55);
// n1.push(true); // !: Argument of type 'boolean' is not assignable to parameter of type 'number'.

n2.push(55);

n3.push('ram');

// Array of Objects
type User = {
  id: number;
  name: string;
  isActive: boolean;
};

const users1: Array<User> = [];

// users1.push('ram'); // !: Argument of type 'string' is not assignable to parameter of type 'User'.

users1.push({ id: 1, name: 'ram', isActive: true });

// Mixed Array
const arr1: (number | string)[] = [10, 'hello', 30];

// Either all strings or all numbers.
const arr2: Array<string> | Array<number> = [10, 30];
const arr3: Array<string> | Array<number> = ['hello', 'world'];

// Nested Array
const n4: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

const n5: Array<Array<number>> = [
  [1, 2, 3],
  [4, 5, 6],
];

n4.push([7, 8, 9]);
n5.push([7, 8, 9]);

// Readonly Array
const n6: readonly number[] = [5, 6];
const n7: ReadonlyArray<number> = [5, 6];

// Can't mutate
n6.push(7); // !: Property 'push' does not exist on type 'readonly number[]'.
n7.push(7); // !: Property 'push' does not exist on type 'readonly number[]'.

export {};
