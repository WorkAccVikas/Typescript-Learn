// TOPIC: in operator

interface User {
  name: string;
  email: string;
}

interface Admin extends User {
  role: string;
}

const isAdminAccount = (user: User | Admin): boolean => {
  if ('role' in user) {
    return true;
  }
  return false;
};

export {};
