const score: Array<number> = [];
const names: Array<number> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  // same as any : but Type it will return same as value type we have passed on parameter like string, boolean ,number etc.
  return val;
}

// identityThree("7"); // true, 3
function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "ff", type: 9 });

function getProduct<T>(product: T[]): T {
  return product[4];
}

const getMoreProduct = <T>(product: T[]): T => {
  const myIndex = 89;
  return product[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunc<T, U extends Database>(one: T, two: U): object {
  return {
    one,
    two,
  };
}

anotherFunc(3, { connection: "ll", username: "mansi", password: "88" });

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(products: T) {
    this.cart.push(products);
  }
}
