// TOPIC : Abstract class

abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
  ) {}

  abstract getSepia(): void;

  getRealTime(): number {
    // Complex logic goes here
    return 14;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log('Sepia');
  }
}

const ob1 = new Instagram('normal', 'none', 3);
console.log('ob1', ob1);
ob1.getSepia();
console.log(ob1.getRealTime());

// ==================================================================================

abstract class Person {
  constructor(
    public name: string,
    private age: number,
  ) {}

  getAge(): number {
    // Complex logic goes here

    return this.age;
  }

  getAgeWithYear(year: number): string {
    return `${this.age + year}`;
  }

  abstract introduce(): void;
}

class Employee extends Person {
  // implementing abstract method
  introduce(): void {
    console.log(`Hi, I'm ${this.name}, I'm ${this.getAge()}`); // 23
  }
}

// const ob = new Person('ram', 23); // ! : Cannot create an instance of an abstract class.ts(2511)
const ob = new Employee('ram', 23); // ! : Cannot create an instance of an abstract class.ts(2511)
ob.introduce();
ob.getAgeWithYear(5);

class Manager extends Person {
  constructor(
    name: string,
    age: number,
    public readonly title: string,
  ) {
    super(name, age);
  }

  // implementing abstract method
  introduce(): void {
    console.log(`Hi, I'm ${this.name}, I'm ${this.getAgeWithYear(5)}`); // 28
  }

  // overriding abstract method
  getAgeWithYear(year: number): string {
    return `${this.title} - ${super.getAgeWithYear(year)}`;
  }
}

const ob2 = new Manager('ram', 23, 'Manager');
ob2.introduce();
ob2.getAgeWithYear(5);

export {};
