// TOPIC : Default Enum
var SeatChoice1;
(function (SeatChoice1) {
    SeatChoice1[SeatChoice1["AISLE"] = 0] = "AISLE";
    SeatChoice1[SeatChoice1["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice1[SeatChoice1["WINDOW"] = 2] = "WINDOW";
    SeatChoice1[SeatChoice1["FOURTH"] = 3] = "FOURTH";
})(SeatChoice1 || (SeatChoice1 = {}));
const s1 = SeatChoice1.AISLE;
console.log(s1); // 0
export {};
