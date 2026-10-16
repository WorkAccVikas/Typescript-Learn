interface Person {
  name: string;
  role: string;
}

type Persons = Record<string, Person>;

const x1: Persons = {};

x1['0'] = {};
x1['1'] = { name: 'v' };
x1['2'] = { name: 'v', role: 'v1', city: 'v2' };
x1['3'] = { name: 'v', role: 'v1' };

// ===============================================================================================================

type TRole = 'admin' | 'owner';

type A = Record<TRole, Array<string>>;

const x2: A = {
  admin: ['e'],
};

const x3: A = {
  admin: [],
  owner: [],
  staff: [],
};

const x4: A = {
  admin: [],
  owner: '',
};
const x5: A = {
  admin: [],
  owner: [],
};

// ===============================================================================================================

interface IPageInfo {
  id: number;
  title: string;
}

interface IPageVerbose {
  home: IPageInfo;
  about: IPageInfo;
  contact: IPageInfo;
}

type TB = 'home' | 'about' | 'contact';

type TPage = Record<TB, IPageInfo>;

export {};
