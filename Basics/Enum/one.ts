// TOPIC : Default Enum
enum SeatChoice1 {
  AISLE, // 0
  MIDDLE, // 1
  WINDOW, // 2
  FOURTH, // 3
}

const s1: SeatChoice1 = SeatChoice1.AISLE;
const s4: SeatChoice1 = 0;
const s6: SeatChoice1 = 3;

const s2: SeatChoice1 = 99; // !: Type '99' is not assignable to type 'SeatChoice1'
const s3: SeatChoice1 = 'AISLE'; // !: Type '"AISLE"' is not assignable to type 'SeatChoice1'
const s5: SeatChoice1 = SeatChoice1[0]; // !: Type 'string' is not assignable to type 'SeatChoice1'.

console.log(s1); // 0

export {};
