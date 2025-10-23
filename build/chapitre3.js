// Exercise 1
// Crée une classe BankAccount avec une propriété privée balance.
// Ajoute une méthode publique showBalance().
// class BankAccount {
//   private balance: number;
//   constructor(balance: number) {
//     this.balance = balance;
//   }
//   showBalance() {
//     console.log("J'ai", this.balance, "euros.");
//   }
// }
// const currentBalance = new BankAccount(1500);
// currentBalance.showBalance();
// Exercice 2
// Crée une classe SafeBox avec une propriété privée secretCode.
// Ajoute une méthode publique open(code: string) qui vérifie si le code est correct.
// class SafeBox {
//   private secretCode: string;
//   private codePattern = /^[a-zA-Z0-9@.]+$/;  // Regex pour valider format
//   constructor(secretCode: string) {
//     this.secretCode = secretCode;
//   }
//   public open(code: string): void {
//     if (!this.codePattern.test(code)) {
//       console.log("Format du code invalide.");
//       return;
//     }
//     if (code === this.secretCode) {
//       console.log("Coffre ouvert !");
//     } else {
//       console.log("Code incorrect.");
//     }
//   }
// }
// const showCode = new SafeBox("Loic@.Z");
// showCode.open("Loic@.Z");  // Coffre ouvert !
// showCode.open("1234");     // Code incorrect.
// showCode.open("Loic<>Z"); // Format du code invalide.
