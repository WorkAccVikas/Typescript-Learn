// TOPIC : Custom Values
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 5] = "Up";
    Direction[Direction["Down"] = 6] = "Down";
    Direction[Direction["Left"] = 7] = "Left";
    Direction[Direction["Right"] = 8] = "Right";
})(Direction || (Direction = {}));
const dir1 = Direction.Up;
const dir2 = Direction.Left;
console.log(dir1); // 5
console.log(dir2); // 7
var SeatChoice3;
(function (SeatChoice3) {
    SeatChoice3[SeatChoice3["AISLE"] = 0] = "AISLE";
    SeatChoice3[SeatChoice3["MIDDLE"] = 11] = "MIDDLE";
    SeatChoice3[SeatChoice3["WINDOW"] = 12] = "WINDOW";
    SeatChoice3[SeatChoice3["FOURTH"] = 13] = "FOURTH";
})(SeatChoice3 || (SeatChoice3 = {}));
const s3 = SeatChoice3.AISLE; // 0
const s4 = SeatChoice3.WINDOW; // 12
console.log(s3); // 0
console.log(s4); // 12
export {};
