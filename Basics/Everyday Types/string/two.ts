const s1 = 'VIKAS';
const s2 = 'vikas';

type A = Uppercase<typeof s2>;
type B = Lowercase<typeof s1>;
type C = Capitalize<typeof s2>;
type D = Uncapitalize<typeof s1>;

export {};
