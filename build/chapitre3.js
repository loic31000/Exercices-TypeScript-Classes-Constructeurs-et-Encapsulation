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
var safeBox = /** @class */ (function () {
    function safeBox(secretcode) {
        this.secretcode = secretcode;
    }
    safeBox.prototype.open = function () {
        console.log("Le code secret est", this.secretcode);
    };
    return safeBox;
}());
var showCode = new safeBox("Mai@", 1234);
showCode.open();
