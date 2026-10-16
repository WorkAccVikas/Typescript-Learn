class User {
  constructor(
    public name: string,
    public age: number,
  ) {}

  greet() {
    return `Hello ${this.name}`;
  }
}

type UserInstance = InstanceType<typeof User>;

const user: UserInstance = new User('Vikas', 25);
user.greet();

export {};
