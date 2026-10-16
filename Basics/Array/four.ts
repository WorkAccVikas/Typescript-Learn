// Senior

// Q : define a non-empty array type
type NonEmptyArray<T> = [T, ...T[]];

const numbers: NonEmptyArray<number> = [1]; // ✅
const more: NonEmptyArray<number> = [1, 2, 3]; // ✅

// ! : Type '[]' is not assignable to type 'NonEmptyArray<number>'. Source has 0 element(s) but target requires 1.
const empty: NonEmptyArray<number> = []; // ❌ Type error
