type State = {
  count: number;
};

type Methods = {
  increment(): void;
  reset(): void;
};

type Store = State & Methods;

const methods: Methods & ThisType<State> = {
  increment() {
    this.count++;
  },

  reset() {
    this.count = 0;
  },
};

const store: Store = {
  count: 0,
  ...methods,
};

export {};
