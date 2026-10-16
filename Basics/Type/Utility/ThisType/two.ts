interface IMath {
  double(): void;
  half(): void;
}

const math: IMath = {
  double(this: { value: number }) {
    this.value *= 2;
  },
  half(this: { value: number }) {
    this.value /= 2;
  },
};

const x1 = {
  value: 1,
  ...math,
};

x1.double();

console.log(x1.value);

x1.half();

console.log(x1.value);

const math1: IMath & ThisType<{ value: number }> = {
  double() {
    this.value *= 2;
  },
  half() {
    this.value /= 2;
  },
};

const x2 = {
  value: 1,
  ...math1,
};

x2.double();

console.log(x2.value);

x2.half();

console.log(x2.value);

export {};

// LINK : https://youtu.be/IPcAeo1ZKEk?si=QPgVsrIrGXhgMZkQ
