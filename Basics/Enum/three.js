"use strict";
// TOPIC : String Enum
var SeatChoice2;
(function (SeatChoice2) {
    SeatChoice2["AISLE"] = "aisle";
    SeatChoice2["MIDDLE"] = "middle";
    SeatChoice2["WINDOW"] = "window";
    SeatChoice2["FOURTH"] = "fourth";
})(SeatChoice2 || (SeatChoice2 = {}));
const s2 = SeatChoice2.AISLE;
console.log(s2); // 'aisle'
