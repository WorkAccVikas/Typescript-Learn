const ROLES = ['admin', 'user', 'manager'] as const;

type Role = (typeof ROLES)[number];

const x1: Role = 'admin';
const x2: Role = 'ss';

export {};
