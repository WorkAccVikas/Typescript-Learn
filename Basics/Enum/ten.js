// TOPIC : TIPS AND TRICKS
// PROBLEM 1 : Get all enum values
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Approved"] = 1] = "Approved";
    Status[Status["Rejected"] = 2] = "Rejected";
})(Status || (Status = {}));
const values1 = Object.values(Status);
console.log(values1); // ["Pending", "Approved", "Rejected", 0, 1, 2]
const values2 = Object.values(Status).filter((v) => typeof v === 'number');
console.log(values2); // [0, 1, 2]
var Status1;
(function (Status1) {
    Status1["Pending"] = "PENDING";
    Status1["Approved"] = "APPROVED";
})(Status1 || (Status1 = {}));
const values3 = Object.values(Status1);
console.log(values3); // ["PENDING", "APPROVED"]
export {};
