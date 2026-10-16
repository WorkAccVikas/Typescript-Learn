function createStreetLight<C extends string>(colors: C[], defaultColor: C) {
  // ...
}

createStreetLight(['red', 'yellow', 'green'], 'red');
createStreetLight(['red', 'yellow', 'green'], 'red1');

function createStreetLight1<C extends string>(
  colors: C[],
  defaultColor: NoInfer<C>,
) {
  // ...
}

createStreetLight1(['red', 'yellow', 'green'], 'red');
createStreetLight1(['red', 'yellow', 'green'], 'red1');

export {};
