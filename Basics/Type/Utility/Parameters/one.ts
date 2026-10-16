function createUser(name: string, age: number, isActive: boolean) {
  // ...
}

type CreateUserParams = Parameters<typeof createUser>;

type Name = CreateUserParams[0];
// string

type Age = CreateUserParams[1];
// number

type Role = CreateUserParams[2];
// string

type Other = CreateUserParams[3];

function searchUsers(query: string, page?: number, limit?: number) {}

type SearchParams = Parameters<typeof searchUsers>;

function log(message: string, ...values: unknown[]) {}

type LogParams = Parameters<typeof log>;

function getValue<T>(value: T): T {
  return value;
}

type Params = Parameters<typeof getValue>; // [value: unknown]

type Result = Parameters<string>;

export {};
