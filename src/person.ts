// Exercise 1 fini.
// Exercise 2 fini. 


class Person {
  //attributs
  public firstName: string;
  public lastName: string;
  public age: number;

  //méthode ou function
  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  showInfo() {
    console.log("Bonjour je m'appelle", this.lastName, this.firstName, "J'ai", this.age, "ans.");
  }
}

//instance
const profil = new Person("leclair","loic", 38);
 
profil.showInfo();
