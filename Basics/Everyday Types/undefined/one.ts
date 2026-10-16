interface A {
  name?: string;
}

interface B {
  name: string | undefined;
}

let x1: A;
x1 = {};
x1 = { name: undefined };
x1 = { name: 'ram' };

let y1: B;
y1 = {};
y1 = { name: undefined };
y1 = { name: 'ram' };

export {};

// LINK : https://youtu.be/X_tvQoW4ioI?si=TZeFbcfsU0Iw2SFb