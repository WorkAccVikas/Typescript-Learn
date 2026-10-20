// TOPIC: strictBuiltinIteratorReturn

const names = new Set(['Vikas', 'Rahul']);

const iterator = names.values();

const result = iterator.next();

console.log(result.value);

// ==================================================
const iterator1 = new Set(['Vikas']).values();

const result1 = iterator1.next();

if (!result1.done) {
  console.log(result.value.toUpperCase());
}

export {};
