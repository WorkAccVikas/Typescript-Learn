class User {
  email: string; // automatically public if you can't mention access specifier
  name: string;
  city: string = 'mumbai';
  readonly age: number = 22;
  private mobileNumber: number = 9866223344;
  // #mobileNumber: number = 9866223344;
  private isPresent: boolean;

  constructor(email: string, name: string, isPresent: boolean) {
    this.email = email;
    this.name = name;
    this.isPresent = isPresent;
  }
}

const user1 = new User('ram@gmail.com', 'ram', true);

console.log('user1', user1);
console.log('city', user1.city);
user1.city = 'goa';
console.log('city', user1.city);

console.log('age = ', user1.age);
// When # : Property 'mobileNumber' does not exist on type 'User'.
// When private : Property 'mobileNumber' is private and only accessible within class 'User'.
console.log('mobile Number = ', user1.mobileNumber);

user1.age = 99; // !: Cannot assign to 'age' because it is a read-only property.
console.log('isPresent = ', user1.isPresent); // ! : Property 'isPresent' is private and only accessible within class 'User'.

// This is way to write class (Modern way)
class User1 {
  readonly age: number = 22;
  private mobileNumber: number = 9866223344;

  // Mandatory to use access specifier in constructor parameters
  // Senior developer
  constructor(
    public email: string,
    public name: string,
    private isPresent: boolean,
  ) {}
}

const user2 = new User('ram@gmail.com', 'ram', false);

export {};
