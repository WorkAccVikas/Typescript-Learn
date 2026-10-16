// TOPIC : Custom Values
enum Direction {
  Up = 5, // 5
  Down, // 6
  Left, // 7
  Right, // 8
}

const dir1 = Direction.Up;
const dir2 = Direction.Left;
console.log(dir1); // 5
console.log(dir2); // 7

enum SeatChoice3 {
  AISLE = 0, // 0
  MIDDLE = 11, // 11
  WINDOW, // 12
  FOURTH, // 13
}

const s3: SeatChoice3 = SeatChoice3.AISLE; // 0
const s4: SeatChoice3 = SeatChoice3.WINDOW; // 12

console.log(s3); // 0
console.log(s4); // 12

export {};
