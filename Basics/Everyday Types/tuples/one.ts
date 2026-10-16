type User = [number, string];

const u1: User = [1, 'v1'];

const u0: User = []; // !: Type '[]' is not assignable to type 'User'. Source has 0 element(s) but target requires 2.
const u2: User = [1]; // ! Type '[number]' is not assignable to type 'User'. Source has 1 element(s) but target requires 2.
const u3: User = [1, 'v1', true]; // !: Type '[number, string, boolean]' is not assignable to type 'User'. Source has 3 element(s) but target allows only 2.

u1[0] = 22;
u1.push(55);
u1.push(true); // !: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

type User1 = readonly [number, string];

const u4: User1 = [2, 'v2'];

u4[0] = 22; // !: Cannot assign to '0' because it is a read-only property.
u4.push(55); // !: Property 'push' does not exist on type 'User1'.
u4.push(true); // !: Property 'push' does not exist on type 'User1'.

export {};
