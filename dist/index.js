"use strict";
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
    constructor(name, email, user) {
        this.name = name;
        this.email = email;
        this.user = user;
        this.city = "";
    }
}
const mansi = new User("mansi@gmail.com", "mansi", "user");
// mansi.name = "manso"; // can't use publicaly if you have add private
// mansi.city = "surat";
// mansi.city = "delhi";
