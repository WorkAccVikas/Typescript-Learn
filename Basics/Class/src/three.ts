/*
==========================================================
Access Modifiers Demo
==========================================================

Imagine we are building an Employee Management System.

Person
   ↑
Employee
   ↑
Manager

We'll learn:

✅ public
✅ private
✅ protected
✅ readonly
✅ constructor parameter properties
✅ overriding
✅ common mistakes
*/

class Person {
  /*
    PUBLIC (default)

    - Accessible everywhere.
    - Anyone can read/write it.
    - Don't use public for sensitive data.
  */

  public country = 'India';

  /*
    READONLY

    - Can only be assigned
        1. Here
        2. Inside constructor

    - Cannot change later.
  */

  public readonly id: number;

  /*
    PROTECTED

    - Accessible inside this class
    - Accessible inside child classes
    - NOT accessible outside

    Good for things subclasses need.
  */

  protected name: string;

  /*
    PRIVATE

    - Accessible ONLY inside this class.

    Perfect for passwords,
    bank balance,
    tokens,
    secrets.
  */

  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  public introduce() {
    console.log(`Hi, I'm ${this.name}`);
  }

  /*
      Since age is private,
      expose it safely.

      This is Encapsulation.
  */

  public getAge() {
    return this.age;
  }

  /*
      Safely modify private data.
  */

  public setAge(age: number) {
    if (age < 0) {
      throw new Error('Invalid age');
    }

    this.age = age;
  }
}

/*==========================================================
Child Class
==========================================================*/

class Employee extends Person {
  constructor(
    id: number,
    name: string,
    age: number,
    public department: string,
  ) {
    super(id, name, age);
  }

  printEmployee() {
    /*
        ✅ public

        Accessible.
    */

    console.log(this.country);

    /*
        ✅ protected

        Child class can access.
    */

    console.log(this.name);

    /*
        ❌ private

        ERROR

        Property 'age' is private.

        console.log(this.age)
    */

    // console.log(this.age);
    console.log(this.getAge());
  }
}

/*==========================================================
Outside World
==========================================================*/

const emp = new Employee(1, 'Vikas', 25, 'Engineering');

/*
==========================================================
PUBLIC
==========================================================
*/

console.log(emp.country);

// Can modify because NOT readonly

emp.country = 'USA';

console.log(emp.country);

/*
==========================================================
READONLY
==========================================================
*/

console.log(emp.id);

/*

❌ ERROR

Cannot assign because readonly.

emp.id = 50;

*/
emp.id = 50;

/*
==========================================================
PROTECTED
==========================================================
*/

/*

❌ ERROR

Accessible only inside subclasses.

console.log(emp.name);

*/
console.log(emp.name);

/*
==========================================================
PRIVATE
==========================================================
*/

/*

❌ ERROR

Property 'age' is private.

console.log(emp.age);

*/
console.log(emp.age);

/*
Correct way
*/

console.log(emp.getAge());

emp.setAge(30);

console.log(emp.getAge());

/*
==========================================================
Methods
==========================================================
*/

emp.introduce();

emp.printEmployee();

export {};
