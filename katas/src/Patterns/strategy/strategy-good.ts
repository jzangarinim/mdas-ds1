// Implementación del Patrón Strategy: Clases de algoritmos separadas que pueden intercambiarse
// ✅ Solución: Cada algoritmo de descuento en su propia clase

// ✅ Interfaz de estrategia define comportamiento común
interface DiscountStrategy {
  calculateDiscount(orderAmount: number): number;
  getDescription(): string;
}

// ✅ Cada algoritmo en su propia clase
class RegularCustomerDiscount implements DiscountStrategy {
  public calculateDiscount(orderAmount: number): number {
    return 0; // Sin descuento
  }

  public getDescription(): string {
    return "Cliente regular - sin descuento";
  }
}

class PremiumCustomerDiscount implements DiscountStrategy {
  public calculateDiscount(orderAmount: number): number {
    return orderAmount * 0.1; // 10% de descuento
  }

  public getDescription(): string {
    return "Cliente premium - 10% de descuento";
  }
}

class VIPCustomerDiscount implements DiscountStrategy {
  public calculateDiscount(orderAmount: number): number {
    return orderAmount * 0.2; // 20% de descuento
  }

  public getDescription(): string {
    return "Cliente VIP - 20% de descuento";
  }
}

class EmployeeDiscount implements DiscountStrategy {
  public calculateDiscount(orderAmount: number): number {
    return orderAmount * 0.5; // 50% de descuento
  }

  public getDescription(): string {
    return "Empleado - 50% de descuento";
  }
}

// ✅ Clase contexto usa estrategia sin saber cuál es
class DiscountCalculator {
  private strategy: DiscountStrategy;

  constructor(strategy: DiscountStrategy) {
    this.strategy = strategy;
  }

  // ✅ Puede cambiar estrategia en tiempo de ejecución
  public setStrategy(strategy: DiscountStrategy): void {
    this.strategy = strategy;
  }

  public calculateDiscount(orderAmount: number): number {
    return this.strategy.calculateDiscount(orderAmount);
  }

  public getDiscountInfo(): string {
    return this.strategy.getDescription();
  }
}

// ✅ Uso - las estrategias pueden intercambiarse fácilmente
console.log("=== Solución con Patrón Strategy ===");

const orderAmount = 100;
console.log(`Monto del pedido: $${orderAmount}\n`);

// ✅ Fácil cambiar entre diferentes estrategias de descuento
const calculator = new DiscountCalculator(new RegularCustomerDiscount());
console.log(`${calculator.getDiscountInfo()}: $${calculator.calculateDiscount(orderAmount)}`);

calculator.setStrategy(new PremiumCustomerDiscount());
console.log(`${calculator.getDiscountInfo()}: $${calculator.calculateDiscount(orderAmount)}`);

calculator.setStrategy(new VIPCustomerDiscount());
console.log(`${calculator.getDiscountInfo()}: $${calculator.calculateDiscount(orderAmount)}`);

calculator.setStrategy(new EmployeeDiscount());
console.log(`${calculator.getDiscountInfo()}: $${calculator.calculateDiscount(orderAmount)}`);

// ✅ ¡Agregar nueva estrategia es fácil - solo crear nueva clase!
class StudentDiscount implements DiscountStrategy {
  public calculateDiscount(orderAmount: number): number {
    return orderAmount * 0.15; // 15% de descuento
  }

  public getDescription(): string {
    return "Estudiante - 15% de descuento";
  }
}

calculator.setStrategy(new StudentDiscount());
console.log(`${calculator.getDiscountInfo()}: $${calculator.calculateDiscount(orderAmount)}`);

export { DiscountStrategy, RegularCustomerDiscount, PremiumCustomerDiscount, VIPCustomerDiscount, EmployeeDiscount, StudentDiscount, DiscountCalculator };
