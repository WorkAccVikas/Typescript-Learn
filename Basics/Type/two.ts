// Type Alias with Index Signature
type Score = {
  [subject: string]: number;
};

const s1: Score = {
  math: 22,
  english: '55',
};
const s2: Score = {
  math: 22,
  english: 55,
};
