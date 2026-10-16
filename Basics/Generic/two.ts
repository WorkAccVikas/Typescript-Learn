// TOPIC: Class Generic
class GenericClass<T> {
  public cart: T[] = [];

  addToCart(item: T) {
    this.cart.push(item);
  }
}

interface Product {
  name: string;
  price: number;
}

interface User {
  name: string;
  email: string;
}

const genericClass = new GenericClass<Product>();
const genericClass1 = new GenericClass<User>();

export {};
