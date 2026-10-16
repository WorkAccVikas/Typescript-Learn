// TOPIC: Type Simplification and Readability

interface Address {
  city: string;
  homeDate?: Date;
}

interface User {
  id: number;
  name: string;
  address?: Address;
  tags: string[];
  createdAt: Date;
}
interface Emp {
  eid: string;
  department?: string;
}

type Person = User & Emp;

// POINT: 1st way (deep)
/**
 * Recursively expands object properties for improved type readability.
 */
type Prettify<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: Prettify<O[K]> }
    : never
  : T;

// POINT: 2nd way (deep)
/**
 * Recursively expands object properties for improved type readability.
 */
type Prettify1<T> = T extends object
  ? {
      [K in keyof T]: Prettify1<T[K]>;
    }
  : T;

// POINT: 3rd way (shallow)
/**
 * Flattens the top-level properties of a type for improved readability.
 */
type Prettify2<T> = { [K in keyof T]: T[K] } & {};

// POINT: 4th way (deep)
/**
 * Recursively expands object properties while flattening each object level.
 */
type Prettify3<T> = T extends object
  ? { [K in keyof T]: Prettify3<T[K]> } & {} // plain objects: expand
  : T;

// POINT: 5th way (deep) (BEST)
/**
 * Recursively expands plain objects while preserving functions and built-in types.
 */
type Prettify4<T> = T extends (...args: any[]) => any
  ? T // functions: leave alone
  : T extends readonly unknown[] // arrays & tuples
    ? { [K in keyof T]: Prettify4<T[K]> }
    : T extends Date | RegExp | Map<any, any> | Set<any> | Promise<any>
      ? T // built-in objects: leave alone
      : T extends object
        ? { [K in keyof T]: Prettify4<T[K]> } & {} // plain objects: expand
        : T; // primitives

type A = Prettify<Person>;
type B = Prettify1<Person>;
type C = Prettify2<Person>;
type D = Prettify3<Person>;
type E = Prettify4<Person>;

interface Student {
  sid: number;
  name: string;
  salary?: never;
}

const x1: Student = {
  sid: 1,
  name: 'ram',
};

type Z = Prettify<Student>;
type Y = Prettify1<Student>;
type X = Prettify2<Student>;
type W = Prettify3<Student>;
type V = Prettify4<Student>;

export {};

// LINK : https://chatgpt.com/share/6ac28019-b82c-83ee-808a-5a90cd4f6c05
