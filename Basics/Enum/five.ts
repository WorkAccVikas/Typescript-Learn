// TOPIC : Computed Members

enum Size1 {
  Small = 1,
  Medium = Small * 2,
  Large = Medium * 2,
}

const s9: Size1 = Size1.Small;
const s10: Size1 = Size1.Medium;
const s11: Size1 = Size1.Large;

console.log(s9); // 1
console.log(s10); // 2
console.log(s11); // 4

function getValue() {
  return 100;
}

enum Example {
  A = getValue(), // Computed from function
}

const s12: Example = Example.A;

console.log(s12); // 100

export {};
