// TOPIC : Heterogeneous Enum

enum SeatChoice4 {
  AISLE = 'aisle', // 'aisle'
  MIDDLE = 25, // 25
  WINDOW, // 26
  FOURTH = 'fourth', // 'fourth'
}

const s5: SeatChoice4 = SeatChoice4.AISLE; 
const s6: SeatChoice4 = SeatChoice4.WINDOW; 

console.log(s5); // 'aisle'
console.log(s6); // 26

export {};
