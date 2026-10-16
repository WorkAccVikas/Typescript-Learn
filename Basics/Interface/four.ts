interface User {
  id: number;
  name: string;
}

const employee = {
  id: 1,
  name: 'John',
  salary: 50000,
};

// Point: this is how you fool the compiler
const user: User = employee;

// Correct way
const user1: User = {
  id: 1,
  name: 'John',
  salary: 50000,
};
export {};

