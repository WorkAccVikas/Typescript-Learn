async function fetchUser() {
  return {
    id: 101,
    name: 'Vikas',
  };
}

type Result = ReturnType<typeof fetchUser>;

type User = Awaited<ReturnType<typeof fetchUser>>;

export {};
