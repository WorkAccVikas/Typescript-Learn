const name: string = 'ram';
const roll_no: number = 55;

const person = {
  id: 1,
  name: 'tom',
};

const marks = {
  maths: 22,
};

const x1: object = name;
const x2: object = roll_no;

const x3: object = person;
const x4: object = marks;

const w1 = new WeakMap();

w1.set(person, 1);

export {};
