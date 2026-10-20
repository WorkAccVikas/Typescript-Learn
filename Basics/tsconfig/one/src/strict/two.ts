// TOPIC : strictNullChecks
interface User {
  id: number;
  name: string;
}

const users: User[] = [{ id: 1, name: 'Vikas' }];

const user = users.find((item) => item.id === 10);

// ❌ Error: user might be undefined
console.log(user.name);

export {};
