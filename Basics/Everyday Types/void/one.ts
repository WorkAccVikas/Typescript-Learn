function f1() {
  console.log('f1');
}

const x1 = f1();

function f2(): void {
  console.log('f2');
}

const x2 = f2();

function f3(): void {
  return 55;
}

const x3 = f3();

const f4 = (): void => {
  console.log('f4');
};

const f5 = function (): void {
  console.log('f5');
};

function f6() {
  return undefined;
}

function f7(): void {
  return undefined;
}
