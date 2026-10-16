// TOPIC: keyof

interface User {
  id: number;
  name: string;
  email: string;
}

type UserKey = keyof User; // 'id' | 'name' | 'email'

// Example
function getValue(user: User, key: keyof User) {
  return user[key];
}

const user: User = {
  id: 1,
  name: 'ram',
  email: 'ram@gmail',
};

getValue(user, 'email');
getValue(user, 'city'); // ! : Argument of type '"city"' is not assignable to parameter of type 'keyof User'.

// Example: Generic
function getValue1<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
getValue1(user, 'email');
getValue1(user, 'city'); // ! : Argument of type '"city"' is not assignable to parameter of type 'keyof User'.

export {};
