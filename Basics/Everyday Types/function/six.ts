type TAdd = (x: number, y: number) => number;
type TMul = (x: number, y?: number) => number;

const add: TAdd = (a, b) => {
  return a + b;
};

const add2: TAdd = () => {
  return 77;
};

const add4: TAdd = (m, n) => {
  return 56;
};

add(1, 2);
add(1, 2, 3); // !: Expected 2 arguments, but got 3

add2(1, 2);
add2(1, 2, 3); // !: Expected 2 arguments, but got 3

add4(1, 2);
add4(1, 2, 3); // !: Expected 2 arguments, but got 3

const mul1: TMul = () => {
  return 113;
};

mul1(5);
mul1(5, 6);
mul1(5, '5'); // !: Argument of type 'string' is not assignable to parameter of type 'number'.

/**
 *
 */
const mul2: TMul = () => {
  return 36;
};

// NOTE: Defined definition using interface
interface Logger {
  (message: string): string;
}

const logger: Logger = () => {
  return 'joe';
};

type TZero = () => number;

/**
 * ! : Type '(x: number) => number' is not assignable to type 'TZero'.
      Target signature provides too few arguments. Expected 1 or more, but got 0.
 */
const fn: TZero = (x: number) => {
  return x;
};

export {};
