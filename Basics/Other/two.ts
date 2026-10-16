function getSuffix(): string | null {
  return 'a';
}

let x1 = getSuffix();

if (!x1) {
  let y1: string = 'r' + x1.toUpperCase();

  ['ram', 'seeta'].forEach((item) => {
    let y2: string = item + x1.toUpperCase();
  });
}

if (x1 != null) {
  let y1: string = 'r' + x1.toUpperCase();

  ['ram', 'seeta'].forEach((item) => {
    let y2: string = item + x1.toUpperCase();
  });
}

export {};

// LINK : https://youtu.be/EpgPmeY_R58?si=jhXnxiosEtq5pkTT
