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

type UserBasicInfo = Pick<User, 'id' | 'age'>;

const x1: UserBasicInfo = {
  id: 1,
  age: 55,
};

const x2: UserBasicInfo = {
  id: 1,
  age: 55,
  city: 'goa',
};

export {};
