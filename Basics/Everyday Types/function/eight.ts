// TOPIC : Variadic Tuple Types (Senior)
function call<T extends unknown[], R>(fn: (...args: T) => R, ...args: T): R {
  return fn(...args);
}

type Ttheme = 'light' | 'dark';

const t1: Ttheme = 'dark';

const sum = (a: number, b: string, c: boolean): Ttheme => 'dark';

const result = call(sum, 10, '20', true); 
const result1 = call(sum, 10, '20', true, 44); // ! : Expected 3 arguments, but got 4.ts(2554)
