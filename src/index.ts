// class User {
//   email: string;
//   private name: string; //you can also define like #name to show private
//   //   readonly city: string = ""; // You can access it, not use it
//   private readonly city: string = ""; // if you want to access it, add "private"

//   constructor(email: string, name: string) {
//     this.name = name;
//     this.email = email;
//   }
// }

class User {
  protected _courseCount = 1; // Protected class can be access which inherits any class
  readonly city: string = "";
  constructor(
    public name: string,
    public email: string,
    private user: string
  ) {}

  private deleteToken() {
    console.log("delete token");
  }

  get getApplyEmail(): string {
    return `apply${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(num) {
    // Set method - no return type // if you put any of type it will give error  ##Important
    if (num <= 1) {
      throw new Error("num should be more than 1");
    }
    this._courseCount = num;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 5;
  }
}

const mansi = new User("mansi", "mansi@gmail.com", "user");
// mansi.name = "manso"; // can't use publicaly if you have add private

// mansi.city = "surat";
// mansi.city = "delhi";

// mansi.deleteToken() // can't access
