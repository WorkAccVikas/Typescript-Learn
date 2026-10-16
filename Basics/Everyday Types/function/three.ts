// TOPIC : All types of function

function greet1(name: string): string {
  return `Hello ${name}`;
}

// console.log(greet1()); // !: Expected 1 arguments, but got 0.
console.log(greet1('Vikas'));

const greet2 = function (name: string): string {
  return `Hello ${name}`;
};

// console.log(greet2()); // !: Expected 1 arguments, but got 0.
console.log(greet2('Vikas'));

const greet3 = (name: string): string => {
  return `Hello ${name}`;
};

// console.log(greet3()); // !: Expected 1 arguments, but got 0.
console.log(greet3('Vikas'));

export {};
