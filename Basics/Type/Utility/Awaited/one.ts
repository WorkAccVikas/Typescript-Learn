type A = Awaited<Promise<string>>;
// string

type B = Awaited<Promise<number>>;
// number

type C = Awaited<string>;
// string

async function fetchUser() {
  return {
    id: 101,
    name: 'Vikas',
  };
}

type Result = ReturnType<typeof fetchUser>;

type User = Awaited<ReturnType<typeof fetchUser>>;

type Result1 = Awaited<Promise<string> | Promise<number>>; // string | number

export {};
