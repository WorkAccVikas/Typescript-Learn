// TOPIC: Branded Type

type AccountNumber = number;
type AccountBalance = number;

function getBalance(accountNumber: AccountNumber): AccountBalance {
  return 5000;
}

const accountNumber: AccountNumber = 123456;
const accountBalance: AccountBalance = 10000;

getBalance(accountBalance); // No TypeScript error!

declare const brand: unique symbol;

export type Brand<T, B extends string> = T & { [brand]: B };

type AccountNumber1 = Brand<number, 'AccountNumber'>;
type AccountBalance1 = Brand<number, 'AccountBalance'>;

function getBalance1(accountNumber: AccountNumber1): AccountBalance1 {
  return 5000 as AccountBalance1;
}

const accountNumber1 = 123456 as AccountNumber1;
const accountBalance1 = 10000 as AccountBalance1;

getBalance1(accountBalance1);
getBalance1(accountNumber1);

export {};

// LINK : https://www.youtube.com/shorts/rFdORlOWWe4