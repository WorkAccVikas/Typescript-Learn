import { Prettify4 } from '../Generic/Useful/Type/two';

type State = {
  name: string;
  age: number;
  [Symbol.iterator]: () => void;
};

type Setters<T> = {
  [K in keyof T]: (value: T[K]) => void;
};

type A = Setters<State>;

type Setters1<T> = {
  [K in keyof T & string]: (value: T[K]) => void;
};

type B = Setters1<State>;

type SetProperty<K extends string> = `set${Capitalize<K>}`;

type C = SetProperty<'department'>; // setDepartment
type D = SetProperty<1>; // setDepartment

type Setters2<T> = {
  //   [K in keyof T as `set${Capitalize<K & string>}`]: (value: T[K]) => void; // ✅
  [K in keyof T & string as `set${Capitalize<K>}`]: (value: T[K]) => void; // ✅
};

type E = Setters2<State>;

/*
type E = {
  setName: (value: string) => void;
  setAge: (value: number) => void;
}
*/

type Getters<T> = {
  [K in keyof T & string as `get${Capitalize<K>}`]: () => T[K];
};

type F = Getters<State>;

type Store<T> = T & Setters2<T> & Getters<T>;

type G = Store<State>;

type G1 = Prettify4<G>;

export {};

// https://www.youtube.com/watch?v=gRf8ZbvLcAA&list=PLYvdvJlnTOjF6aJsWWAt7kZRJvzw-en8B&index=4
