// TOPIC : Heterogeneous Enum
var SeatChoice4;
(function (SeatChoice4) {
    SeatChoice4["AISLE"] = "aisle";
    SeatChoice4[SeatChoice4["MIDDLE"] = 25] = "MIDDLE";
    SeatChoice4[SeatChoice4["WINDOW"] = 26] = "WINDOW";
    SeatChoice4["FOURTH"] = "fourth";
})(SeatChoice4 || (SeatChoice4 = {}));
const s5 = SeatChoice4.AISLE;
const s6 = SeatChoice4.WINDOW;
console.log(s5); // 'aisle'
console.log(s6); // 26
export {};
