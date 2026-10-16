class User {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

type UserArgs = ConstructorParameters<typeof User>;

const args: UserArgs = ['Vikas', 25];

const user = new User(...args);

export {};
