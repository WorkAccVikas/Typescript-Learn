type User = {
  readonly name: string;
  city: string;
};

type UserArr1 = readonly User[];

const users1: UserArr1 = [
  { name: 'Alice', city: 'goa' },
  { name: 'Bob', city: 'mumbai' },
];

users1.push({ name: 'Charlie', city: 'kerala' }); // !: Property 'push' does not exist on type 'UserArr1'

users1[0].name = 'v1'; // !: Cannot assign to 'name' because it is a read-only property
users1[0].city = 'gujarat';

type UserArr2 = User[];

const users2: UserArr2 = [
  { name: 'Alice', city: 'goa' },
  { name: 'Bob', city: 'mumbai' },
];

users2.push({ name: 'Charlie', city: 'kerala' }); // ✅

// =========================================================================================================

type Emp = {
  username: string;

  // 🔒 Readonly property
  // - ❌ Cannot reassign the `salaries` property.
  // - ✅ Can still mutate the array (push, pop, splice, etc.).
  readonly salaries: number[];

  // 🔒 Readonly array
  // - ✅ Can reassign the property.
  // - ❌ Cannot mutate the array.
  salaries1: readonly number[];

  // 🔒 Readonly property + Readonly array
  // - ❌ Cannot reassign the property.
  // - ❌ Cannot mutate the array.
  readonly salaries2: readonly number[];

  // Normal mutable property and mutable array
  // - ✅ Can reassign the property.
  // - ✅ Can mutate the array.
  departments: string[];
};

const e1: Emp = {
  username: 'vv1',
  salaries: [12, 22],
  salaries1: [200, 201, 202],
  salaries2: [300, 301],
  departments: ['d1', 'd2'],
};

// ==================== salaries ====================

// ✅ Allowed - array itself is mutable
e1.salaries.push(33);
e1.salaries.pop();

// ❌ Error - property is readonly
e1.salaries = [100, 200];

// ==================== salaries1 ====================

// ❌ Error - array is readonly
e1.salaries1.push(33);

// ❌ Error - array is readonly
e1.salaries1.pop();

// ✅ Allowed - property is NOT readonly
e1.salaries1 = [100, 200];

// ==================== salaries2 ====================

// ❌ Error - array is readonly
e1.salaries2.push(33);

// ❌ Error - array is readonly
e1.salaries2.pop();

// ❌ Error - property is readonly
e1.salaries2 = [100, 200];

// ==================== departments ====================

// ✅ Allowed - mutable array
e1.departments.push('d3');

// ✅ Allowed - mutable array
e1.departments.pop();

// ✅ Allowed - mutable property
e1.departments = ['d4', 'd5', 'd6'];

export {};
