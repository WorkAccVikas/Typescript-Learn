function getUser(id: number) {
  return {
    id,
    name: 'Alice',
  };
}

type Params = Parameters<typeof getUser>; // [number]
type Result = ReturnType<typeof getUser>; // { id: number; name: string }

const x1: Params = [];
const x2: Params = ['2'];
const x3: Params = ['so'];

const x4: Params = [2];
const x5: Params = [2,5];

const y1: Result = {};
const y2: Result = { id: 'jj', name: 'tom' };
const y3: Result = { id: 1, name: 'tom', age: 77 };

const y4: Result = { id: 1, name: 'tom' };

type AsyncResult = Awaited<Promise<Result>>;
