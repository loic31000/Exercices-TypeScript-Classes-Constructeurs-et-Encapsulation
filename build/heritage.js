// Exercice 1 – Héritage simple
// Crée une classe Animal avec une méthode makeSound() qui affiche "Un animal fait un bruit.".
// Crée une classe Dog qui hérite de Animal et redéfinit la méthode makeSound() pour afficher "Le chien aboie.".
// class Animal {
//   public son: string;
//   constructor(son: string) {
//     this.son = son;
//   }
//   makeSound(): void {
//     console.log(this.son);
//   }
// }
// const animal = new Animal("Un animal fait un bruit.");
// animal.makeSound();
// class Dog extends Animal {
//   constructor(son: string) {
//     super(son);
//   }
//   makeSound(): void {
//     console.log(this.son);
//   }
// }
// const chien = new Dog("Le chien aboie.");
// chien.makeSound();
// Exercice 2 – Ajouter des propriétés
// Crée une classe Person avec une propriété name et une méthode introduce().
// Crée une classe Student qui hérite de Person et ajoute une propriété school.
// Ajoute une méthode study().
//     Testez les attributs et méthodes des classes.
// class Persone {
//   public name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   introduce() {
//     console.log("Je m'appelle", this.name);
//   }
// }
// class Student extends Persone {
//   public school: string;
//   constructor(name: string, school: string) {
//     super(name);
//     this.school = school;
//   }
//   study() {
//     console.log("J'étudie à", this.school);
//   }
// }
// const newPerson = new Persone("Alex");
// newPerson.introduce();
// const student = new Student("Madyson", "Harvard");
// student.introduce();
// student.study();
// Exercice 3 – Appeler le constructeur parent
// Crée une classe Vehicle avec une propriété brand.
// Crée une classe Car qui hérite de Vehicle.
// Appelle le constructeur du parent avec super(brand).
//     Testez les attributs et méthodes des classes.
// class Vehicule {
//   public brand: string;
//   constructor(brand: string) {
//     this.brand = brand;
//   }
//   infoVehicule(){
//     console.log("La marque de la voiture", this.brand);
//   }
// }
// const showVehicule = new Vehicule("Nissan");
// showVehicule.infoVehicule();
// class Car extends Vehicule {
// public model:string;
//     constructor(brand:string, model:string) {
//         super(brand);
//         this.model = model;
//     }
// infoCar() {
//     console.log("La marque est",this.brand, "et le model est", this.model);
//    }
// }
// const showVehicule2 = new Car("Nissan","GTR");
// showVehicule2.infoCar();
