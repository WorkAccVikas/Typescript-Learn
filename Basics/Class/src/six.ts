// TOPIC: Composition

class A {
  getA() {
    console.log('A');
  }
}

class B {
  constructor(public b0: A) {}

  getB() {
    this.b0.getA();
  }
}

const b = new B(new A());
b.getB();

export {};
