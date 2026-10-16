function error(message: string): never {
  throw new Error(message);
}

const x1: never = 'vikas';

const x2: never = error('x2');
const x3 = error('x3');
const x4: string = error('x4');

type A = string | never;

export {};
