// Violación del Patrón Strategy: Algoritmos codificados con cadenas if/else
// ❌ Problema: Toda la lógica de cálculo de descuentos mezclada en una clase

class DiscountCalculator {
  public calculateDiscount(customerType: string, orderAmount: number): number {
    // ❌ Todos los algoritmos mezclados con lógica condicional
    if (customerType === "regular") {
      // Cliente regular - sin descuento
      return 0;
    } else if (customerType === "premium") {
      // Cliente premium - 10% de descuento
      return orderAmount * 0.1;
    } else if (customerType === "vip") {
      // Cliente VIP - 20% de descuento
      return orderAmount * 0.2;
    } else if (customerType === "employee") {
      // Empleado - 50% de descuento
      return orderAmount * 0.5;
    } else {
      throw new Error(`Tipo de cliente desconocido: ${customerType}`);
    }
  }

  // ❌ Agregar nuevos tipos de cliente requiere modificar esta clase
  public getSupportedCustomerTypes(): string[] {
    return ["regular", "premium", "vip", "employee"];
  }
}

// Uso mostrando los problemas
console.log("=== Violación del Patrón Strategy ===");

const calculator = new DiscountCalculator();
const orderAmount = 100;

console.log(`Monto del pedido: $${orderAmount}`);
console.log(`Descuento regular: $${calculator.calculateDiscount("regular", orderAmount)}`);
console.log(`Descuento premium: $${calculator.calculateDiscount("premium", orderAmount)}`);
console.log(`Descuento VIP: $${calculator.calculateDiscount("vip", orderAmount)}`);
console.log(`Descuento empleado: $${calculator.calculateDiscount("employee", orderAmount)}`);

// ❌ Problemas:
// 1. Todos los algoritmos de descuento en una clase
// 2. Agregar nuevo tipo de cliente requiere modificar DiscountCalculator
// 3. No se pueden probar algoritmos de descuento individuales por separado
// 4. Viola el Principio Abierto/Cerrado

export { DiscountCalculator };
