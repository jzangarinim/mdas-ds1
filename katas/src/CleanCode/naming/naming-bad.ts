// Violación de Clean Code: Mal Nombrado
// ❌ Problemas: Nombres sin intención, información falsa, difícil pronunciar, codificaciones

// ❌ Sin intención clara
let d: number; // ¿Qué es 'd'?
let x: string; // ¿Qué es 'x'?
const arr = [1, 2, 3]; // ¿Array de qué?

// ❌ Información falsa
const userList: Set<string> = new Set(); // ¡No es una List, es un Set!
const accountsArray = { name: "John", balance: 1000 }; // ¡No es un array!

// ❌ Difícil de pronunciar
const yyyymmdstr = "20251102"; // ¿Cómo pronuncias esto?
const genymdhms = new Date(); // ¿Gen-y-m-d-h-m-s?

// ❌ Codificaciones innecesarias (notación húngara)
const strFirstName = "John"; // El 'str' es redundante en TypeScript
const intAge = 25; // El 'int' es redundante
const boolIsActive = true; // El 'bool' es redundante

// ❌ Números y strings mágicos
class UserService {
  public validateUser(user: any): boolean {
    if (user.age < 18) {
      // ❌ ¿Qué significa 18?
      return false;
    }

    if (user.status === "ACT") {
      // ❌ ¿Qué significa "ACT"?
      return true;
    }

    if (user.points > 1000) {
      // ❌ ¿Por qué 1000?
      return true;
    }

    return false;
  }

  public calculateDiscount(total: number, type: string): number {
    if (type === "VIP") {
      return total * 0.2; // ❌ ¿Qué significa 0.2?
    } else if (type === "REG") {
      return total * 0.05; // ❌ ¿Qué significa 0.05?
    }
    return 0;
  }
}

// Uso
console.log("=== Violación de Nombrado en Clean Code ===");

d = 86400; // ¿Segundos? ¿Milisegundos? ¿Días?
x = "usuario@email.com";

const service = new UserService();
const user = { age: 20, status: "ACT", points: 1200 };
console.log("Usuario válido:", service.validateUser(user));
console.log("Descuento:", service.calculateDiscount(100, "VIP"));

export { UserService };
