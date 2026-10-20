// TOPIC: noImplicitThis

const user = {
  name: 'Vikas',

  greet() {
    return this.name;
  },
};

const greet1 = user.greet;

greet1(); // here , not catches CT error

function greet2() {
  return this.name;
}

interface User {
  name: string;
}

function greet3(this: User): string {
  return this.name;
}

const user2: User = { name: 'Vikas' };

console.log(greet3.call(user2)); // "Vikas"

interface IUser {
  name: string;
  greet(this: IUser): string;
}

const user3: IUser = {
  name: 'Vikas',

  greet() {
    return this.name;
  },
};

const callback = user3.greet;

// The original `user` context is not preserved.
callback(); // Runtime error in strict JavaScript

const callback2 = user.greet.bind(user);

callback2();
// =========================================================

class Counter {
  count = 0;

  incrementLater() {
    // ❌ Without noImplicitThis, this is allowed, but dangerous!
    setTimeout(function () {
      this.count++; // Runtime Error: Cannot read properties of undefined (reading 'count')
    }, 1000);

    // ✅ Arrow function inherits `this` from `incrementLater`
    setTimeout(() => {
      this.count++;
    }, 1000);
  }
}
// ================================================================
interface DatabaseUser {
  id: number;
  name: string;
  log(): void;
}

// ✅ Explicitly defining the type of `this` for a standalone function
function logUser(this: DatabaseUser) {
  console.log(`User ${this.id}: ${this.name}`);
}

const user4: DatabaseUser = {
  id: 42,
  name: "Alice",
  log: logUser,
};

user4.log(); // Works perfectly!
logUser(); // Compile-time error: 'this' context of type 'void' is not assignable to method's 'this' of type 'DatabaseUser'

export {};
