// TOPIC: Tuple
type User = [number, string];

const u1: User = [1, 'ram'];
const u2: User = [1, 'ram', 'seeta'];

// TOPIC: Tuple with optional element
type A = [number, string, boolean?];

const a1: A = [1, 'ram'];
const a2: A = [1, 'ram', true];
const a3: A = [1, 'ram', 's'];
const a4: A = [1, 'ram', true, 'seeta'];

// TOPIC: Readonly Tuple
type B = readonly [string, number];

const b1: B = ['ram', 55];
const b2: B = ['ram', 55, 'seeta'];

b1.push('seeta');

// TOPIC: Named Tuple
type C = [name: string, price: number];

const c1: C = ['ram', 55];
const c2: C = ['ram', 55, 'seeta'];

c1.push('seeta'); // This also work in tuples

export {};
