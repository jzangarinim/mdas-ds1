// Cumplimiento de Encapsulamiento: Datos protegidos con validación
// ✅ Solución: Propiedades privadas y métodos controlados

class BankAccount {
  // ✅ Propiedades privadas - no accesibles directamente
  private balance: number;
  private readonly accountNumber: string; // readonly previene modificación
  private isActive: boolean;
  private transactionHistory: string[];

  constructor(accountNumber: string, initialBalance: number) {
    // ✅ Validación en constructor
    if (initialBalance < 0) {
      throw new Error("El balance inicial no puede ser negativo");
    }
    if (!accountNumber || accountNumber.length === 0) {
      throw new Error("Número de cuenta inválido");
    }

    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.isActive = true;
    this.transactionHistory = [];
  }

  // ✅ Getter - solo lectura del balance
  public getBalance(): number {
    return this.balance;
  }

  // ✅ Getter - solo lectura del número de cuenta
  public getAccountNumber(): string {
    return this.accountNumber;
  }

  // ✅ Getter - estado de la cuenta
  public checkIfActive(): boolean {
    return this.isActive;
  }

  // ✅ Método con validación de negocio
  public deposit(amount: number): boolean {
    if (!this.isActive) {
      console.log("Error: Cuenta inactiva");
      return false;
    }
    if (amount <= 0) {
      console.log("Error: El monto debe ser positivo");
      return false;
    }

    this.balance += amount;
    this.transactionHistory.push(`Depósito: $${amount}`);
    console.log(`Depósito exitoso: $${amount}. Nuevo balance: $${this.balance}`);
    return true;
  }

  // ✅ Método con validación de fondos suficientes
  public withdraw(amount: number): boolean {
    if (!this.isActive) {
      console.log("Error: Cuenta inactiva");
      return false;
    }
    if (amount <= 0) {
      console.log("Error: El monto debe ser positivo");
      return false;
    }
    if (amount > this.balance) {
      console.log("Error: Fondos insuficientes");
      return false;
    }

    this.balance -= amount;
    this.transactionHistory.push(`Retiro: $${amount}`);
    console.log(`Retiro exitoso: $${amount}. Nuevo balance: $${this.balance}`);
    return true;
  }

  // ✅ Método controlado para cerrar cuenta
  public closeAccount(): boolean {
    if (this.balance > 0) {
      console.log("Error: Debe retirar todos los fondos antes de cerrar la cuenta");
      return false;
    }
    this.isActive = false;
    console.log("Cuenta cerrada exitosamente");
    return true;
  }

  // ✅ Copia del historial, no referencia directa
  public getTransactionHistory(): string[] {
    return [...this.transactionHistory]; // Copia defensiva
  }
}

// ✅ Con encapsulamiento, todas las reglas son respetadas
console.log("=== Cumplimiento de Encapsulamiento ===");

const account = new BankAccount("001", 1000);
console.log(`Balance inicial: $${account.getBalance()}`);

// ✅ No se puede modificar directamente - solo mediante métodos
// account.balance = -5000; // ❌ Error: Property 'balance' is private

// ✅ Intento de retiro excesivo es rechazado
account.withdraw(2000); // "Error: Fondos insuficientes"

// ✅ Depósito con validación
account.deposit(500); // Funciona correctamente

// ✅ Retiro válido
account.withdraw(300); // Funciona correctamente

console.log(`Balance final: $${account.getBalance()}`);

// ✅ No se puede cerrar cuenta con fondos
account.closeAccount(); // "Error: Debe retirar todos los fondos..."

export { BankAccount };
