// Exercise 1 fini.
// Exercise 2 fini. 
var Person = /** @class */ (function () {
    //méthode ou function
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.showInfo = function () {
        console.log("Bonjour je m'appelle", this.lastName, this.firstName, "J'ai", this.age, "ans.");
    };
    return Person;
}());
//instance
var profil = new Person("leclair", "loic", 38);
profil.showInfo();
