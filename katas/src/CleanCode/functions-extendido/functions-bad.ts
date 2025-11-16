// Violación de Clean Code: Funciones Mal Diseñadas
// ❌ Problemas: Hacen muchas cosas, grandes, niveles de abstracción mezclados, efectos secundarios

class OrderProcessor {
  private orders: any[] = [];
  private emailsSent: number = 0; // ❌ Efecto secundario inesperado

  // ❌ Función hace MUCHAS cosas: valida, calcula, guarda, envía email, y más
  // ❌ Función muy grande (más de 30 líneas)
  // ❌ Niveles de abstracción mezclados (alto nivel + bajo nivel)
  public processOrder(customerName: string, email: string, items: any[], paymentMethod: string): boolean {
    // Nivel bajo: validación detallada
    if (!customerName || customerName.trim() === "") {
      console.log("Error: nombre vacío");
      return false;
    }
    if (!email.includes("@")) {
      console.log("Error: email inválido");
      return false;
    }
    if (items.length === 0) {
      console.log("Error: sin items");
      return false;
    }

    // Nivel bajo: cálculos
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price * items[i].quantity;
    }

    // Nivel bajo: aplicar descuento
    if (total > 100) {
      total = total * 0.9;
    }

    // Nivel bajo: calcular impuestos
    const tax = total * 0.16;
    total += tax;

    // Nivel medio: crear objeto orden
    const order = {
      customer: customerName,
      email: email,
      items: items,
      total: total,
      date: new Date(),
      status: "pending",
    };

    // Nivel alto: guardar orden
    this.orders.push(order);

    // Nivel bajo: enviar email
    console.log(`Enviando email a ${email}: Tu pedido de $${total.toFixed(2)} ha sido procesado`);
    this.emailsSent++; // ❌ Efecto secundario: modifica estado de la clase

    // Nivel bajo: procesar pago
    if (paymentMethod === "credit_card") {
      console.log("Procesando tarjeta de crédito...");
    } else if (paymentMethod === "paypal") {
      console.log("Procesando PayPal...");
    }

    // ❌ Sin early return - muchos niveles de anidación
    return true;
  }

  // ❌ Función que hace múltiples cosas
  public getOrdersAndSendReport(minTotal: number): any[] {
    const filtered = this.orders.filter((o) => o.total >= minTotal);
    // ❌ Efecto secundario inesperado: envía reporte
    console.log(`Reporte: ${filtered.length} órdenes encontradas`);
    console.log(`Total de emails enviados: ${this.emailsSent}`);
    return filtered;
  }
}

// Uso
console.log("=== Violación de Funciones en Clean Code ===");

const processor = new OrderProcessor();

const items = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Mouse", price: 25, quantity: 2 },
];

processor.processOrder("Juan Pérez", "juan@email.com", items, "credit_card");

const orders = processor.getOrdersAndSendReport(50);
console.log(`Órdenes filtradas: ${orders.length}`);

export { OrderProcessor };
