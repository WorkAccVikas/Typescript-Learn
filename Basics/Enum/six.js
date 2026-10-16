// TOPIC : Reverse Mapping
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
const c1 = Color.Red;
// const c2: Color = Color[0]; // !: Type 'string' is not assignable to type 'Color'.
console.log(Color[0]); // 'Red'
console.log(c1, typeof c1); // 0 "number"
// No reverse mapping on String enum
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
const s1 = Status.Pending;
const s4 = Status['Pending'];
// const s5: Status = Status['PENDING']; // !: Property 'PENDING' does not exist on type 'typeof Status'. Did you mean 'Pending'?
// const s2: Status = 'PENDING'; // !: Type '"PENDING"' is not assignable to type 'Status'.
// const s3: Status = 'Pending'; // !: Type '"Pending"' is not assignable to type 'Status'.
console.log(s4); // 'PENDING'
console.log(Status['PENDING']); // undefined
export {};
