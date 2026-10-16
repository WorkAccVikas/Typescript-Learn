// TOPIC : this

type Counter = {
  count: number;
  increment(this: Counter): void;
};

const counter: Counter = {
  count: 0,
  increment() {
    this.count++;
  },
};

counter.increment();
