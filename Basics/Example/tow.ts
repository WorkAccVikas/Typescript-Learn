// TOPIC : Type Annotation

interface User {
  id: number;
  name: string;
}

const u1: User = {
  id: 1,
  name: 'Vikas',
};

const u2: User = {
  id: 1,
  name: 'Vikas',
  city: 'goa',
};

// TOPIC : Type Assertion

const u3 = {} as User;

console.log(u3.name); // undefined at runtime

// TOPIC : Const Assertion
const u4 = {
  id: 2,
  name: 'ram',
  family: {
    mother: 'seeta',
  },
} as const;

// TOPIC : satisfies
type Routes = {
  home: string;
  users: string;
};

const r1 = {
  home: '/',
  users: '/users',
} satisfies Routes;

const r2 = {
  home: '/',
  users: '/users',
  settings: '/settings',
} satisfies Routes;

export {};
