type Padding = 'small' | 'normal' | 'large' | string;

function f1(val: Padding): string {
  return '';
}

f1('small');
f1('tiny');

// NOTE: Useful
type Padding1 = 'small' | 'normal' | 'large' | (string & {});

function f2(val: Padding1): string {
  return '';
}

f2('large');
f2('tiny');

export {};

// LINK : https://youtu.be/KAnIputI3VE?si=ZRgtKwcPDrlue_no