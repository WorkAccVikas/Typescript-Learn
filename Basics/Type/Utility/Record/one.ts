type StudentResult = Record<string, number>;

const x1: StudentResult = {
  maths: 90,
  history: 70,
};

const x2: StudentResult = {
  maths: 90,
  history: '70',
};

type Role = 'admin' | 'user' | 'guest';

type RolePermissions = Record<Role, string[]>;

const y1: RolePermissions = {
  admin: [],
  guest: [],
  user: [],
};

const y2: RolePermissions = {
  admin: [],
  guest: [],
};

export {};
