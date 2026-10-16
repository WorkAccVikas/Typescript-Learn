// ============================================= Object Type ================================================
type User = {
  name: string;
  age: number;
};

function createUser(user: User) {}

createUser({ name: 'Ram' });
createUser({ name: 'Ram', age: 55, city: 'goa' });

createUser({ name: 'Ram', age: 55 });

// ============================================= Primitive Type ================================================
type Age = number;

const age1: Age = '55';

const age2: Age = 55;

// ============================================= Array Type ================================================
type Numbers = Array<number>;

const n1: Numbers = ['22'];

const n2: Numbers = [];
const n3: Numbers = [22];

// ============================================= Tuple Type ================================================
type Point = [number, string];

const x1: Point = [];

const x2: Point = [1, 1];
const x3: Point = [1, 'Vikas'];
const x3a: Point = [1, 'Vikas', 55];

// ============================================= Function Type ================================================
type Add = (a: number, b: number) => number;

function add1(x: number, y: number): number {
  return 5;
}

const add2: Add = (x, y) => {
  return 5;
};

const add3: Add = function (x, y) {
  return 5;
};

// ============================================= Union Type ================================================
type ID = number | string;

const x6: ID = null;

const x4: ID = 5;
const x5: ID = 'Ramu';

type Person4 = {
  name: string;
};
type Employee4 = {
  salary: number;
  age: number;
};

type Staff4 = Person4 | Employee4;

const st1: Staff4 = {
  name: 'v1',
};
const st2: Staff4 = {
  salary: 500,
  age: 55,
};
const st3: Staff4 = {
  name: 'v1',
  salary: 500,
};

// ============================================= Literal Type ================================================
type Theme = 'light' | 'dark';

const theme1: Theme = '';
const theme4: Theme = 'system';

const theme2: Theme = 'light';
const theme3: Theme = 'dark';

// ============================================= Nested Type ================================================
type Person = {
  name: string;
  address: {
    city: string;
  };
};

const p1: Person = {};
const p3: Person = {
  name: 'Ram',
  address: {},
};

const p2: Person = {
  name: 'Ram',
};
const p4: Person = {
  name: 'Ram',
  address: {
    city: 'goa',
  },
};

// ============================================= Readonly ================================================
type Person1 = {
  readonly id: number;
  name: string;
};

const p5: Person1 = {
  id: 1,
  name: 'v1',
};

p5.id = 5;

// ============================================= Optional ================================================
type Person2 = {
  id: number;
  name: string;
  city?: string;
};

const p8: Person2 = {
  id: 1,
  name: 'v1',
  city: 'goa',
  salary: 500,
};

const p6: Person2 = {
  id: 1,
  name: 'v1',
};
const p7: Person2 = {
  id: 1,
  name: 'v1',
  city: 'goa',
};

// ============================================= Combining multiple types ================================================
type Person3 = {
  name: string;
};
type Employee3 = {
  salary: number;
  age: number;
};

type Staff3 = Person3 & Employee3;

const st4: Staff3 = {
  name: 'v1',
  salary: 500,
};

const st5: Staff3 = {
  name: 'v1',
  salary: 500,
  age: 55,
};

// =============================================  Type ================================================
