// Crée une classe User avec username et email.
// Utilise le constructeur pour les initialiser.
// class User {
//     public username:string;
//     public email:string;
//     constructor(username:string, email:string) {
//         this.username = username;
//         this.email = email;
//     }
//     userInfos(){
//         console.log("L'user s'appelle", this.username, "et son email est", this.email);
//     }
// }
// const showInfos = new User("sion","sion@mail.fr");
// showInfos.userInfos();
// Crée une classe Course avec title et duration (en heures).
// Ajoute une méthode describeCourse().
// Exercice 7
// class Course {
//   public title: string;
//   public duration: number;
//   constructor(title: string, duration: number) {
//     this.title = title;
//     this.duration = duration;
//   }
//   describeCourse() {
//     console.log("Le", this.title, "de New-York dure", this.duration, "heures 40 minutes");
//   }
// }
// const showCourse = new Course("marathon", 4);
// showCourse.describeCourse();
// Crée une classe Laptop avec brand, processor, price.
// Initialise-les dans le constructeur.
// class laptop {
//   public brand: string;
//   public processor: string;
//   public price: number;
//   constructor(brand: string, processor: string, price: number) {
//     this.brand = brand;
//     this.processor = processor;
//     this.price = price;
//   }
//   infosLaptop() {
//     console.log(
//       "Le laptop",
//       this.brand,
//       "est fournit avec un procésseur",
//       this.processor,
//       "et il coute",
//       this.price,
//       "euros."
//     );
//   }
// }
// const showLaptop = new laptop("asus","Ryzen 7 2700X",1000);
// showLaptop.infosLaptop();
// Crée une classe Book avec title, author, pages.
// Ajoute une méthode summary() qui affiche une courte description.
// class Book {
//     public title:string;
//     public author:string;
//     public pages:number;
//     constructor(title:string,author:string,pages:number) {
//         this.title = title;
//         this.author = author;
//         this.pages = pages;
//     }
//    summary() {
//     console.log("Le livre",this.title, "de",this.author, "a",this.pages,"pages.");
//    }
// }
// const showSummary = new Book("Harry Potter a l'école des sorciers","JK Rowlings",500);
// showSummary.summary();
// Crée une classe Employee avec name, position, salary.
// Ajoute une méthode introduce().
// class Employee {
//   public name: string;
//   public position: string;
//   public salary: number;
//   constructor(name: string, position: string, salary: number) {
//     this.name = name;
//     this.position = position;
//     this.salary = salary;
//   }
//   introduce() {
//     console.log(
//       "Mr",
//       this.name,
//       "est",
//       this.position,
//       "et il touche",
//       this.salary,
//       "euros."
//     );
//   }
// }
// const showIntroduce = new Employee("LECLAIR", "dev", 1800)
// showIntroduce.introduce();
// Crée une classe Plane avec model et capacity.
// Ajoute une méthode fly() qui affiche un message.
// class Plane {
//     public model:string;
//     public capacity:number;
//     constructor(model:string,capacity:number) {
//         this.model = model;
//         this.capacity = capacity;
// }
// fly() {
//     console.log("L'avion modele",this.model, "as une capacité de", this.capacity,"kilometres par heures.");
// }
//   }
//   const showInfo = new Plane("A380",1185);
//   showInfo.fly();
