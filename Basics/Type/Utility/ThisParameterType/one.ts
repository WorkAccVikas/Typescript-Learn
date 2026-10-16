type GreetFunction = (this: { name: string }, greeting: string) => string;

const greet: GreetFunction = function (greeting) {
  return `${greeting}, ${this.name}!`;
};

type GreetThis = ThisParameterType<GreetFunction>;

const user: GreetThis = {
  name: 'Vikas',
};

greet.call(user, 'Hello');

type TAdd = (a: number, b: number) => number;

type AddThis = ThisParameterType<TAdd>;

export {};
