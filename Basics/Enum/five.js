// TOPIC : Computed Members
var Size1;
(function (Size1) {
    Size1[Size1["Small"] = 1] = "Small";
    Size1[Size1["Medium"] = 2] = "Medium";
    Size1[Size1["Large"] = 4] = "Large";
})(Size1 || (Size1 = {}));
const s9 = Size1.Small;
const s10 = Size1.Medium;
const s11 = Size1.Large;
console.log(s9); // 1
console.log(s10); // 2
console.log(s11); // 4
function getValue() {
    return 100;
}
var Example;
(function (Example) {
    Example[Example["A"] = getValue()] = "A";
})(Example || (Example = {}));
const s12 = Example.A;
console.log(s12); // 100
export {};
