const friends1 = [];
const n1 = [22];
const n2 = [];
const n3 = [];
n1.push(55);
// n1.push(true); // !: Argument of type 'boolean' is not assignable to parameter of type 'number'.
n2.push(55);
n3.push('ram');
const users1 = [];
// users1.push('ram'); // !: Argument of type 'string' is not assignable to parameter of type 'User'.
users1.push({ id: 1, name: 'ram', isActive: true });
const values = [10, 'hello', 30];
export {};
