interface User {
  id?: number;
  name?: string;
  age?: number;
  city?: string;
  family?: {
    mother: string;
    father?: string;
  };
}

type CompleteUser = Required<User>;

const x1: CompleteUser = {
  id: 1,
  name: 'ram',
  age: 22,
  city: 'mumbai',
  family: {
    mother: 'ak',
    father: 'ck',
  },
};

const x2: CompleteUser = {
  id: 1,
  name: 'ram',
  age: 22,
  city: 'mumbai',
  family: {
    mother: 'ak',
  },
};

const x3: CompleteUser = {
  id: 1,
  name: 'ram',
  age: 22,
  city: 'mumbai',
  family: {
    father: 'ck',
  },
};

// NOTE: Useful Generic Type

// Point : Style 1
// type DeepRequired<T> = {
//   [P in keyof T]-?: NonNullable<T[P]> extends object
//     ? DeepRequired<NonNullable<T[P]>>
//     : NonNullable<T[P]>;
// };

// type CompleteDeepUser = DeepRequired<User>;

// Point : Style 2
// type DeepRequired<T> = {
//   [P in keyof T]-?: NonNullable<T[P]> extends object
//     ? DeepRequired<NonNullable<T[P]>>
//     : NonNullable<T[P]>;
// };

// type Expand<T> = T extends object
//   ? T extends infer O
//     ? { [K in keyof O]: Expand<O[K]> }
//     : never
//   : T;

// type CompleteDeepUser = Expand<DeepRequired<User>>;

// Point : Style 3
// LINK : https://chatgpt.com/share/6ac2817b-7b8c-83ec-858b-e0138cf18dd4
type DeepRequired<T> = T extends (...args: any[]) => any
  ? T
  : T extends object
    ? T extends infer O
      ? { [K in keyof O]-?: DeepRequired<NonNullable<O[K]>> }
      : never
    : T;

type CompleteDeepUser = DeepRequired<User>;

const x4: CompleteDeepUser = {
  id: 1,
  name: 'ram',
  age: 22,
  city: 'mumbai',
  family: {
    mother: 'ak',
  },
};

const x5: CompleteDeepUser = {
  id: 1,
  name: 'ram',
  age: 22,
  city: 'mumbai',
  family: {
    mother: 'ak',
    father: 'ck',
  },
};

export {};
