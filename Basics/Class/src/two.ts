// TOPIC : Getters and Setters

class User {
  //   readonly age: number; // !: Property 'age' has no initializer and is not definitely assigned in the constructor.
  readonly age: number = 22;
  private _courseCount: number = 1;

  constructor(
    public email: string,
    public name: string,
  ) {}

  private _deleteCourse() {
    this._courseCount = 0;
  }

  get courseCount() {
    return this._courseCount;
  }

  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error('Course count should be more than 1');
    }
    this._courseCount = courseNum;
  }
}

const user1 = new User('ram@gmail.com', 'ram');

console.log('user1', user1);
console.log('age = ', user1.age);
// getter
console.log('courseCount = ', user1.courseCount);
// setter
user1.courseCount = 26;
console.log('courseCount = ', user1.courseCount);
// user1._deleteCourse(); // !: Property '_deleteCourse' is private and only accessible within class 'User'.
console.log('courseCount = ', user1.courseCount);

// TOPIC: Static Getters and Setters
class Config {
  private static _environment = 'development';

  static get environment(): string {
    return Config._environment;
  }

  static set environment(value: string) {
    Config._environment = value;
  }
}

console.log(Config.environment); // development

Config.environment = 'production';

console.log(Config.environment); // production

export {};
