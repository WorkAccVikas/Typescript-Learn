type User = [number, string?];

const u1: User = []; // !: Type '[]' is not assignable to type 'User'. Source has 0 element(s) but target requires 2.

const u2: User = [1];
const u3: User = [1, 'v1'];
const u4: User = [1, 'v1', true]; // !: Type '[number, string, any]' is not assignable to type 'User'.Source has 3 element(s) but target allows only 2.

type User1 = [id: number, name?: string];

const u5: User1 = [1];
const u6: User1 = [1, 'v1'];
const u7: User1 = [1, 'v1', true]; // !: Type '[number, string, boolean]' is not assignable to type 'User1'.Source has 3 element(s) but target allows only 2.

type Command = [cmd: string, ...number[]];

const c1: Command = ['ee1'];
const c2: Command = ['ee1', 1, 55, 6];
const c3: Command = ['ee1', 1, 55, 6, 4, true]; // !: Type at positions 1 through 5 in source is not compatible with type at position 1 in target.

export {};
