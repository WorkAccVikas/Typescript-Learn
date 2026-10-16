interface User {
  id: number;
  name: string;
  family: {
    mother: string;
    father: string;
  };
}

type ReadonlyUser = Readonly<User>;

const x1: ReadonlyUser = {
  id: 1,
  name: 'ram',
  family: {
    mother: 'ak',
    father: 'ck',
  },
};

console.log(x1.id);
x1.id = 2;

console.log(x1.family.mother);
x1.family.mother = 'hh';

// NOTE: Useful Generic Type
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

type DeepReadonlyUser = DeepReadonly<User>;

const x2: DeepReadonlyUser = {
  id: 1,
  name: 'ram',
  family: {
    mother: 'ak',
    father: 'ck',
  },
};

console.log(x2.id);
x2.id = 2;

console.log(x2.family.mother);
x2.family.mother = 'hh';

export {};
