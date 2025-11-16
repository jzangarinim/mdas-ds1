// Violación de Encapsulamiento: Datos expuestos sin protección
// ❌ Problema: Cualquiera puede modificar el estado sin validación

class BankAccount {
  // ❌ Propiedades públicas permiten acceso directo sin control
  public balance: number;
  public accountNumber: string;
  public isActive: boolean;
  public transactionHistory: string[];

  constructor(accountNumber: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.isActive = true;
    this.transactionHistory = [];
  }

  // ❌ Método sin validaciones
  public deposit(amount: number): void {
    this.balance += amount;
    this.transactionHistory.push(`Depósito: ${amount}`);
  }

  // ❌ Método sin validaciones
  public withdraw(amount: number): void {
    this.balance -= amount;
    this.transactionHistory.push(`Retiro: ${amount}`);
  }
}

// ❌ Sin encapsulamiento, cualquiera puede romper las reglas
console.log("=== Violación de Encapsulamiento ===");

const account = new BankAccount("001", 1000);
console.log(`Balance inicial: $${account.balance}`);

// ❌ Modificación directa sin validación
account.balance = -5000; // ¡Balance negativo!
console.log(`Balance después de modificación directa: $${account.balance}`);

// ❌ Cambiar número de cuenta directamente
account.accountNumber = "999"; // ¡No debería ser posible!
console.log(`Número de cuenta modificado: ${account.accountNumber}`);

// ❌ Desactivar cuenta sin proceso adecuado
account.isActive = false; // Bypass de reglas de negocio
console.log(`Cuenta activa: ${account.isActive}`);

// ❌ Modificar historial directamente
account.transactionHistory = []; // ¡Borrar evidencia!
console.log(`Historial manipulado: ${account.transactionHistory.length} transacciones`);

// ❌ Retiro sin validación de fondos suficientes
account.balance = 100;
account.withdraw(1000); // ¡Retiro mayor al balance!
console.log(`Balance después de retiro excesivo: $${account.balance}`);

export { BankAccount };
