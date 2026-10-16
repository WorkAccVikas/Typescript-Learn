// TOPIC : TIPS AND TRICKS

// PROBLEM 1 : Get all enum values

enum Status {
  Pending,
  Approved,
  Rejected,
}

const values1 = Object.values(Status);

console.log(values1); // ["Pending", "Approved", "Rejected", 0, 1, 2]

const values2 = Object.values(Status).filter(
  (v): v is Status => typeof v === 'number',
);

console.log(values2); // [0, 1, 2]

enum Status1 {
  Pending = 'PENDING',
  Approved = 'APPROVED',
}

const values3 = Object.values(Status1);
console.log(values3); // ["PENDING", "APPROVED"]

export {};
