const userIds = [101, 102, 103];

const hasUser = userIds.includes(102);

const userMap = new Map<number, string>();
userMap.set(101, 'Vikas');

(async () => {
  const response = await fetch('/api/users');
})();
export {};
