const numbers: Readonly<Array<number>> = [1, 2, 3];
const numbers1: ReadonlyArray<number> = [1, 2, 3]; // Recommended

// Both are same

numbers.push(22);
numbers1.push(22);

export {};
