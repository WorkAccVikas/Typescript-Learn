interface User {
  name: string;
  age?: number;
  city?: string;
}

const user1: User = {
  name: 'Vikas',
}; // ✅ Valid: age is absent

const user2: User = {
  name: 'Vikas',
  age: 25,
}; // ✅ Valid: age is a number

const user3: User = {
  name: 'Vikas',
  age: undefined,
}; // ❌ Error

// =============================================================================================
interface Settings {
  theme?: 'light' | 'dark';
}

const settings: Settings = {
  theme: 'dark',
};

settings.theme = 'light'; // ✅
settings.theme = undefined; // ❌

delete settings.theme; // ✅
export {};
