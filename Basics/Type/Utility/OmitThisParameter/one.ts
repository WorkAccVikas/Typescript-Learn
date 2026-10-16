type GreetFunction = (this: { name: string }, greeting: string) => string;

// Remove the `this` parameter
type SimpleGreetFunction = OmitThisParameter<GreetFunction>;

// `this` is no longer required
const greet: SimpleGreetFunction = (greeting) => {
  return `${greeting}, friend!`;
};

type A = OmitThisParameter<typeof greet>;

greet('Hello');
// ✅ Works

type TAdd = (a: number, b: number) => number;

type AddThis = OmitThisParameter<TAdd>;

export {};
