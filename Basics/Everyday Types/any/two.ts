let x1: any = 'ram';

x1 = 'jerry';

x1.toFixed(2);

// DESC : That the problem with any here don't show CT error
let y1: boolean = x1;

let x2: unknown = 'seeta';

x2 = 22;

x2.toFixed(2);

if (typeof x2 === 'number') {
  x2.toFixed(2);
}

// DESC: Here, show CT error
let y2: boolean = x2;

export {};
