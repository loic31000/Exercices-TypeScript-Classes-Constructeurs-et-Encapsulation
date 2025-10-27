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

// Exercice 4 – Redéfinition de méthode

// Crée une classe Shape avec une méthode getArea() qui retourne 0.
// Crée une classe Rectangle qui hérite de Shape et redéfinit getArea() pour calculer l’aire réelle.

//     Testez les attributs et méthodes des classes.

// class Shape {
//   public lenght: number;

//   constructor(lenght: number) {
//     this.lenght = lenght;
//   }

//   getArea() {
//     return 0;
//   }
// }

// const aire = new Shape(10);
// aire.getArea();

// class Rectangle extends Shape {
//   public height: number;
//   public width: number;

//   constructor(height: number, width: number, lenght: number) {
//     super(lenght);
//     this.height = height;
//     this.width = width;
//   }
//   getArea2() {
//     console.log(this.lenght * this.width);
//   }
// }

// const modifGetarea = new Rectangle(0, 2, 10);
// aire.getArea();
// modifGetarea.getArea2();

// Exercice 5 – Multi-niveaux d’héritage

// Crée trois classes :
// LivingBeing → Animal → Cat.
// Chaque classe doit avoir une méthode spécifique :

//     LivingBeing: breathe()
//     Animal: eat()
//     Cat: meow()

// class LivingBeing {
//   public breathe: string;

//   constructor(breathe: string) {
//     this.breathe = breathe;
//   }
//   infoLivingBeing() {}
// }
// const showBreath = new LivingBeing("");
// showBreath.infoLivingBeing();

// class Animal extends LivingBeing {
//   public eat: string;

//   constructor(eat: string, breathe: string) {
//     super(breathe);
//     this.eat = eat;
//   }
//   infoAnimal() {
//     console.log("Le chat", this.breathe, "et", this.eat);
//   }
// }
// const showCat = new Animal("respire", "mange");
// showCat.infoAnimal();

// class Cat extends Animal {
//   public meow: string;

//   constructor(eat: string, breathe: string, meow: string) {
//     super(eat, breathe);
//     this.meow = meow;
//   }

//   infoTotal() {
//     console.log(
//       "Le chat",
//       this.meow,
//       "car il veut",
//       this.eat,
//       "et il",
//       this.breathe
//     );
//   }
// }

// const infoAnimal2 = new Cat("mangé", "respire", "miaule");
// infoAnimal2.infoTotal();

// Exercice 7 – Ajout d’une méthode spécifique
// Crée une classe Device avec une méthode turnOn().
// Crée une classe Smartphone qui hérite de Device et ajoute une méthode takePhoto().

// class Device {
//   public model: string;

//   constructor(model: string) {
//     this.model = model;
//   }

//   turnOn() {}
// }
// const showModel = new Device("");
// showModel.turnOn();

// class Smartphone extends Device {
//   public brand: string;

//   constructor(brand: string, model: string) {
//     super(model);
//     this.brand = brand;
//   }
//   takePhoto() {
//     console.log("La", this.brand, "est Samsung et le model est", this.model);
//   }
// }
// const infoFinal = new Smartphone("marque", "Galaxy A13");
// infoFinal.takePhoto();

// Crée une classe Vehicle et une classe Bike qui hérite de Vehicle. Crée un tableau contenant des Vehicle et des Bike.
// Parcours le tableau et appelle l'attribut speed commun sur chacun.

class Vehicle {
    public speed:number;

    constructor(speed:number){
        this.speed = speed;
    }
Vehicle = []
}

class Bike extends Vehicle {
public speed:number;

constructor(speed:number){
    super(speed);
}
Bike = []

}