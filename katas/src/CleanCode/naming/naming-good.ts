// Cumplimiento de Clean Code: Buen Nombrado
// ✅ Solución: Nombres con intención, sin información falsa, pronunciables, sin codificaciones

// ✅ Nombres con intención clara
let secondsInDay: number;
let userEmailAddress: string;
const productPrices: number[] = [1, 2, 3];

// ✅ Sin información falsa
const activeUsers: Set<string> = new Set(); // Correcto: es un Set
const userAccount = { name: "John", balance: 1000 }; // Correcto: es un objeto

// ✅ Pronunciables
const currentDateString = "20251102";
const generatedTimestamp = new Date();

// ✅ Sin codificaciones innecesarias
const firstName = "John"; // TypeScript ya sabe que es string
const age = 25; // TypeScript ya sabe que es number
const isActive = true; // TypeScript ya sabe que es boolean

// ✅ Constantes con nombre en lugar de números/strings mágicos
class UserService {
  // Constantes descriptivas
  private static readonly MINIMUM_AGE = 18;
  private static readonly ACTIVE_STATUS = "ACT";
  private static readonly PREMIUM_POINTS_THRESHOLD = 1000;

  private static readonly VIP_CUSTOMER_TYPE = "VIP";
  private static readonly REGULAR_CUSTOMER_TYPE = "REG";

  private static readonly VIP_DISCOUNT_RATE = 0.2;
  private static readonly REGULAR_DISCOUNT_RATE = 0.05;

  public validateUser(user: User): boolean {
    if (user.age < UserService.MINIMUM_AGE) {
      // ✅ Claro: edad mínima requerida
      return false;
    }

    if (user.status === UserService.ACTIVE_STATUS) {
      // ✅ Claro: estado activo
      return true;
    }

    if (user.points > UserService.PREMIUM_POINTS_THRESHOLD) {
      // ✅ Claro: umbral de puntos premium
      return true;
    }

    return false;
  }

  public calculateDiscount(totalAmount: number, customerType: string): number {
    if (customerType === UserService.VIP_CUSTOMER_TYPE) {
      return totalAmount * UserService.VIP_DISCOUNT_RATE; // ✅ Claro: tasa de descuento VIP
    } else if (customerType === UserService.REGULAR_CUSTOMER_TYPE) {
      return totalAmount * UserService.REGULAR_DISCOUNT_RATE; // ✅ Claro: tasa de descuento regular
    }
    return 0;
  }
}

// ✅ Interfaz con nombres descriptivos
interface User {
  age: number;
  status: string;
  points: number;
}

// Uso
console.log("=== Cumplimiento de Nombrado en Clean Code ===");

secondsInDay = 86400; // ✅ Claro: segundos en un día
userEmailAddress = "usuario@email.com"; // ✅ Claro: dirección de email del usuario

const userService = new UserService();
const validUser: User = { age: 20, status: "ACT", points: 1200 };
console.log("Usuario válido:", userService.validateUser(validUser));
console.log("Descuento:", userService.calculateDiscount(100, "VIP"));

export { UserService, User };
