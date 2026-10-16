function printLength<T extends { length: number }>(item: T) {
  console.log(item.length);
}

printLength('Hello');

printLength([1, 2]);

printLength({ length: 10 });

printLength(100); // !: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.

export {};
