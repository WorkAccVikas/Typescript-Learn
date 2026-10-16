type DBRecord = {
  name: string;
  city?: string;
  isPaid: boolean;
};

const data: DBRecord = {
  name: 'v2',
  isPaid: false,
  city: 'goa',
};

type x = Pick<DBRecord, 'name' | 'city'>;

const x1: x = {
  name: 'v2',
};
const x2: x = {
  name: 'v2',
  city: 'goa',
};

const getDBData1 = (): Pick<DBRecord, 'name' | 'city'> => {
  // return x1; // ✅
  return x2;
};

type TStudent = {
  id: number;
  name: string;
  age: number;
};

const student: TStudent = {
  id: 1,
  name: 'v1',
  age: 22,
};

type Ty = Pick<TStudent, 'age' | 'id'>;

const y1: Ty = {
  id: 2,
  age: 53,
};

const y2 = {
  id: 3,
  salary: 77,
};
const y3 = {
  id: 3,
  salary: 45,
  age: 44,
};

const getDBData2 = (): Ty => {
  // return y1; // ✅
  // return y2; // ❌
  return y3; // ✅
};

export {};
