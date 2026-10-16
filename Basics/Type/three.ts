// Type Alias with Mapped Types
type User = {
  name: string;
  age: number;
};

type OptionalUser1 = {
  [K in keyof User]?: User[K];
};

type OptionalUser2 = Partial<User>;

const user1: OptionalUser1 = {
  name: 'v1',
};

const user2: OptionalUser2 = {
  age: 77,
};

export {};
