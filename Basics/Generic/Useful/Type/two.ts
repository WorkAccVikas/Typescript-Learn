// TOPIC : Strict Union Types

export type Prettify4<T> = T extends (...args: any[]) => any
  ? T // functions: leave alone
  : T extends readonly unknown[] // arrays & tuples
    ? { [K in keyof T]: Prettify4<T[K]> }
    : T extends Date | RegExp | Map<any, any> | Set<any> | Promise<any>
      ? T // built-in objects: leave alone
      : T extends object
        ? { [K in keyof T]: Prettify4<T[K]> } & {} // plain objects: expand
        : T; // primitives

// All keys across every member of the union
type UnionKeys<T> = T extends unknown ? keyof T : never;

// For each member, add the "other" keys as optional `never`
type StrictUnionHelper<T, All> = T extends unknown
  ? T & Partial<Record<Exclude<UnionKeys<All>, keyof T>, never>>
  : never;

export type StrictUnion<T> = StrictUnionHelper<T, T>;

interface Emp {
  name: string;
  salary: number;
}

interface Admin {
  name: string;
  permissions: string[];
}

interface Manager {
  surname: string;
  teamSize: number;
}

type Person = StrictUnion<Emp | Admin | Manager>;
type Person1 = Prettify4<Person>;

// ✅ Valid: exactly one shape
const e: Person = { name: 'Ravi', salary: 50000 };
const a: Person = { name: 'Sam', permissions: ['read', 'write'] };
const m: Person = { surname: 'Anu', teamSize: 5 };

// ❌ Error: mixing Emp + Admin
const bad1: Person = {
  name: 'Ravi',
  salary: 50000,
  permissions: ['read'], // Type 'string[]' is not assignable to type 'undefined'
};

// ❌ Error: mixing Admin + Manager
const bad2: Person = {
  name: 'Sam',
  permissions: ['read'],
  teamSize: 3,
};

// LINK:  https://chatgpt.com/share/6ac4017b-f244-83e8-b17b-32b367b360c0

export {};
