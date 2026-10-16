// TOPIC : Function Composition
const double = (n: number) => n * 2;
const square = (n: number) => n * n;

const compose =
  <A, B, C>(
    f: (x: B) => C,
    g: (x: A) => B
  ) =>
  (x: A): C =>
    f(g(x));

const doubleThenSquare = compose(square, double);

console.log(doubleThenSquare(5)); // 100