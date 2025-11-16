// Cumplimiento de Clean Code: Funciones Bien Diseñadas
// ✅ Solución: Una cosa por función, pequeñas, mismo nivel de abstracción, sin efectos secundarios

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  customer: string;
  email: string;
  items: OrderItem[];
  total: number;
  date: Date;
  status: string;
}

class OrderProcessor {
  private static readonly DISCOUNT_THRESHOLD = 100;
  private static readonly DISCOUNT_RATE = 0.9;
  private static readonly TAX_RATE = 0.16;

  private orders: Order[] = [];

  // ✅ Función hace UNA cosa: procesar orden (orquestación de alto nivel)
  // ✅ Pequeña y con mismo nivel de abstracción
  // ✅ Early return para validaciones
  public processOrder(customerName: string, email: string, items: OrderItem[], paymentMethod: string): boolean {
    // ✅ Early return para validaciones
    if (!this.isValidCustomer(customerName, email)) {
      return false;
    }

    if (!this.hasItems(items)) {
      return false;
    }

    // ✅ Mismo nivel de abstracción: todas son operaciones de alto nivel
    const total = this.calculateOrderTotal(items);
    const order = this.createOrder(customerName, email, items, total);
    this.saveOrder(order);
    this.sendOrderConfirmation(order);
    this.processPayment(paymentMethod, total);

    return true;
  }

  // ✅ Función pequeña que hace UNA cosa: validar cliente
  private isValidCustomer(name: string, email: string): boolean {
    if (!name || name.trim() === "") {
      console.log("Error: nombre vacío");
      return false;
    }

    if (!email.includes("@")) {
      console.log("Error: email inválido");
      return false;
    }

    return true;
  }

  // ✅ Función pequeña que hace UNA cosa: verificar items
  private hasItems(items: OrderItem[]): boolean {
    if (items.length === 0) {
      console.log("Error: sin items");
      return false;
    }
    return true;
  }

  // ✅ Función pequeña que hace UNA cosa: calcular total
  private calculateOrderTotal(items: OrderItem[]): number {
    const subtotal = this.calculateSubtotal(items);
    const discountedTotal = this.applyDiscount(subtotal);
    return this.addTax(discountedTotal);
  }

  // ✅ Función pequeña, nivel de abstracción bajo
  private calculateSubtotal(items: OrderItem[]): number {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // ✅ Función pequeña que hace UNA cosa: aplicar descuento
  private applyDiscount(subtotal: number): number {
    if (subtotal > OrderProcessor.DISCOUNT_THRESHOLD) {
      return subtotal * OrderProcessor.DISCOUNT_RATE;
    }
    return subtotal;
  }

  // ✅ Función pequeña que hace UNA cosa: agregar impuestos
  private addTax(amount: number): number {
    return amount + amount * OrderProcessor.TAX_RATE;
  }

  // ✅ Función pequeña que hace UNA cosa: crear orden
  private createOrder(customerName: string, email: string, items: OrderItem[], total: number): Order {
    return {
      customer: customerName,
      email: email,
      items: items,
      total: total,
      date: new Date(),
      status: "pending",
    };
  }

  // ✅ Función pequeña que hace UNA cosa: guardar orden
  // ✅ Sin efectos secundarios inesperados
  private saveOrder(order: Order): void {
    this.orders.push(order);
  }

  // ✅ Función pequeña que hace UNA cosa: enviar confirmación
  // ✅ Efecto secundario esperado y documentado (enviar email)
  private sendOrderConfirmation(order: Order): void {
    console.log(`Enviando email a ${order.email}: Tu pedido de $${order.total.toFixed(2)} ha sido procesado`);
  }

  // ✅ Función pequeña que hace UNA cosa: procesar pago
  private processPayment(paymentMethod: string, amount: number): void {
    if (paymentMethod === "credit_card") {
      console.log(`Procesando tarjeta de crédito por $${amount.toFixed(2)}...`);
    } else if (paymentMethod === "paypal") {
      console.log(`Procesando PayPal por $${amount.toFixed(2)}...`);
    }
  }

  // ✅ Función hace UNA cosa: filtrar órdenes (sin efectos secundarios)
  public getOrdersByMinTotal(minTotal: number): Order[] {
    return this.orders.filter((order) => order.total >= minTotal);
  }

  // ✅ Función separada que hace UNA cosa: generar reporte
  public generateOrdersReport(orders: Order[]): void {
    console.log(`Reporte: ${orders.length} órdenes encontradas`);
  }
}

// Uso
console.log("=== Cumplimiento de Funciones en Clean Code ===");

const processor = new OrderProcessor();

const items: OrderItem[] = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Mouse", price: 25, quantity: 2 },
];

processor.processOrder("Juan Pérez", "juan@email.com", items, "credit_card");

// ✅ Separación de responsabilidades
const filteredOrders = processor.getOrdersByMinTotal(50);
processor.generateOrdersReport(filteredOrders);

export { OrderProcessor, OrderItem, Order };
