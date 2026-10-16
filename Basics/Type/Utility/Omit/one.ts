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

type PublicUser = Omit<User, 'family' | 'age'>;

const x1: PublicUser = {
  id: 1,
  name: 'ram',
  city: 'mumbai',
};

const x2: PublicUser = {
  id: 1,
  name: 'ram',
};

const x3: PublicUser = {
  id: 1,
  name: 'ram',
  city: 'mumbai',
  age: 22,
};

export {};
