interface User {
  id: number;
  name: string;
  age: number;
  city: string;
  family: {
    mother: string;
    father: string;
  };
}

type PartialUser = Partial<User>;

// NOTE: Useful Generic Type
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type DeepPartialUser = DeepPartial<User>;

const x1: PartialUser = {
  family: {},
};

const x2: DeepPartialUser = {
  family: {},
};

const x3: DeepPartialUser = {
  family: {
    mother: 'seeta',
  },
};

export {};
