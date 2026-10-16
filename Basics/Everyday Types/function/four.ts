// Optional Parameters
function greet1(name: string, age?: number) {
  console.log(name, age);
}

greet1('Vikas');
greet1('Vikas', 55);

// Default Parameters
function greet2(name: string = 'Guest') {
  console.log(name);
}

greet2();
greet2('Vikas');

// Rest Parameters
function greet3(...names: string[]) {
  console.log(names);
}

greet3('Vikas', 'Shyam');
// greet3('Vikas', 1); // !: Argument of type 'number' is not assignable to parameter of type 'string'.

export {};
