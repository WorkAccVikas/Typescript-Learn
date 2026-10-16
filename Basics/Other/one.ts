function foo(arg: string | number | boolean) {
  const isString = typeof arg === 'string';
  const isNumber = typeof arg === 'number';

  const x1 = isString || isNumber;

  if (x1) {
    const y1 = arg; // string
  } else {
    const y2 = arg; // boolean
  }
  const y3 = arg; // string | number | boolean
}

export {};
