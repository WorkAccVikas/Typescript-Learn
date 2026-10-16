function add(a, b) {
  return 'ram';
}

add(1, 2);
add(1, true);

function add2(a: number, b: number): number {
  return Number(a.toFixed()) + Number(b.toFixed());
}

add2(1, 2); 
add2(1, true);

function toUpper(val: string): string {
  return val.toUpperCase();
}

const login = (name: string, isPaid: true) => {};

login('Ram', true);
login(22, true);
login('Seeta');

const signup = (name: name, isPaid: true = false) => {};

signup('Ram', true);
login(22, true);
signup('Seeta');
