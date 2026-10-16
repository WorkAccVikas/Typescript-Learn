// TOPIC: Interface Overlap

interface Person {
  id: number;
  name: string;
}

interface Person {
  age: number;
}

const x: Person = {
  id: 1,
  name: 'ram',
  age: 55,
};

// TOPIC: Interface extends
interface Employee extends Person {
  department: string;
}

const e1: Employee = {
  id: 1,
  name: 'ram',
  age: 55,
  department: 'IT',
};

// TOPIC : Interface extends multiple interfaces
interface Teacher extends Person, Employee {
  salary: number;
}

const t1: Teacher = {
  id: 1,
  name: 'ram',
  age: 55,
  department: 'IT',
  salary: 55,
};

export {};
