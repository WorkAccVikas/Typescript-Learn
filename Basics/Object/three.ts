interface IPrize {
  first: string;
  second: string;
}

function logPrizes(prizes: IPrize) {
  for (const key in prizes) {
    console.log(key, prizes[key].toUpperCase());
  }
}

// Only for write better
function logPrizes1(prizes: IPrize) {
  let key: keyof IPrize;

  for (key in prizes) {
    console.log(key, prizes[key].toUpperCase());
  }
}

const x1: IPrize = {
  first: 'v1',
  second: 'v2',
};

const x2 = {
  first: 'v1',
  second: 'v2',
  third: 3,
};

logPrizes(x1);
logPrizes(x2);

logPrizes1(x1);
logPrizes1(x2);

export {};
