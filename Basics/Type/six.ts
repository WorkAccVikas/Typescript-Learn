// TOPIC: Lookup Types

interface IData {
  id: number;
  family: {
    father: string;
    mother: string;
  };
}

type TFamily = IData['family'];

function f1(): TFamily {
  return {
    father: 'a1',
    mother: 'b1',
  };
}

export {};
