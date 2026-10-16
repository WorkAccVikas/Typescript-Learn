// Recursive Types
type Category = {
  name: string;
  children: Category[];
};

const c1: Category = {
  name: 'Programming',
};
const c2: Category = {
  name: 'Programming',
  children: [
    {
      name: 'Js',
    },
  ],
};

const c3: Category = {
  name: 'Programming',
  children: [],
};
const c4: Category = {
  name: 'Programming',
  children: [
    {
      name: 'Js',
      children: [],
    },
  ],
};

export {};