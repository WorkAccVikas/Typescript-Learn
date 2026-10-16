const person = {
  id: 1,
  name: 'Ram',
};

function login({ name, isPaid }: { name: string; isPaid: boolean }) {}

login({ name: 'v1' });
login({ name: 55, isPaid: false });
login({ name: 'v1', isPaid: false });
login({ name: 'v1', isPaid: false, city: 'goa' });

const x = { name: 'v1', isPaid: false, city: 'goa' };
login(x); // wired behavior (Everything required is present.Extra fields are allowed.)
const y = { isPaid: false, city: 'goa' };
login(y);

const getDBData = (): { name: string; isPaid?: boolean; city?: string } => {
  // return { name: 'v2', isPaid: false, city: 'goa' };
  return { name: 'v2', isPaid: false };
};

const z = getDBData();

login(z);

const getDBData1 = (): {
  name: string;
  isPaid: boolean;
  city?: string;
} => {
  return { name: 'v2', isPaid: false, city: 'goa' };
};

const w = getDBData1();

login(w); // ✅

export {};
