class User {
  email: string;
  name: string;
  readonly city: string = "";
  constructor(email: string, name: string) {
    this.name = name;
    this.email = email;
  }
}

const mansi = new User("mansi@gmail.com", "mansi");
// mansi.city = "surat";
// mansi.city = "delhi";
