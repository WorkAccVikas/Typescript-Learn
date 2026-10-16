function getUser() {
  return {
    id: 101,
    name: 'Vikas',
  };
}

type User = ReturnType<typeof getUser>;

const x1: User = {
  id: 1,
  name: 'ram',
};

const x2: User = {
  id: 1,
};

const x3: User = {
  name: 'ram',
};
const x4: User = {};

const x5: User = {
  id: 1,
  name: 'ram',
  city: 'mumbai',
};

export {};

