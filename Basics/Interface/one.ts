type Tf2 = (x: string) => number;

interface User {
  readonly id: number;
  name: string;
  // BUG : 
  f1: () => string;
  f2: Tf2;
  f3(): boolean;
}

const u1: User = {
  id: 1,
  name: 'ram',
  f1: () => {
    // return 5; // ! : Type '() => number' is not assignable to type '() => string'. Type 'number' is not assignable to type 'string'.
    return 'jj';
  },
  f2: () => {
    return 99;
  },
  f3() {
    return true;
  },
};

export {};
