const rollNo: number = 1;
const name: string = 'ram';

const mobile: null = null;
const city: undefined = undefined;

const x1: object = {};

const person = {};
const person1 = { id: 1 };

let x2: object;
x2 = person;
x2 = rollNo;
x2 = mobile;

// LEARN: show CT error when primitive

const w1 = new WeakMap();

w1.set(person, '');
w1.set(rollNo, '');

export {};

// LINK: https://youtu.be/0y5hhzuQjCA?si=Aq1fdCEJy4cnfchu
