interface User {
  id: string;
  name: string;
}

function getUser(): User | null {
  return null;
}

type UserData = NonNullable<ReturnType<typeof getUser>>; // Type is 'User'

// 1. As a function parameter
function displayUserProfile(data: UserData) {
  console.log(`User ID: ${data.id}, Name: ${data.name}`);
}

// 2. As a variable type
const activeUser: UserData = {
  id: 'usr_123',
  name: 'Alice',
};

// 3. In combination with type narrowing
const user = getUser();

user.name;

if (user) {
  displayUserProfile(user); // 'user' is safely narrowed to UserData
}

export {};
