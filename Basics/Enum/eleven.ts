enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

function printColor(c: Color) {
  console.log(c);
}

console.log(Color.Green); // 'green'
printColor(Color.Green);
// printColor('Green');

enum LoginMode {
  email,
  google,
  facebook,
}

function login(mode: LoginMode) {
  console.log(mode);
}

login(LoginMode.email);
login(0);

login(100); // older version of ts does not throw compiler error

export {};
