// Cumplimiento de Clean Code: Buen Formato
// ✅ Solución: Formato horizontal y vertical correcto

// ✅ Líneas cortas (idealmente max 80-120 caracteres)
// ✅ Espaciado apropiado entre operadores y elementos

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  supplier: string;
  warranty: string;
  discountedPrice?: number;
}

class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: "Laptop",
      price: 1200,
      category: "Electronics",
      stock: 50,
      supplier: "TechCorp",
      warranty: "2 years",
    },
    {
      id: 2,
      name: "Mouse",
      price: 25,
      category: "Accessories",
      stock: 200,
      supplier: "TechCorp",
      warranty: "1 year",
    },
  ];

  // ✅ Líneas cortas, una acción por línea
  public findProductByIdAndUpdateStockAndCalculateDiscountAndSendNotification(productId: number, quantity: number, discountRate: number): Product | null {
    const product = this.findProductById(productId);

    if (!product) {
      return null;
    }

    product.stock -= quantity;
    const discountedPrice = this.calculateDiscountedPrice(product.price, discountRate);

    console.log(`Producto ${product.name} actualizado. ` + `Stock: ${product.stock}, ` + `Precio con descuento: ${discountedPrice}`);

    return {
      ...product,
      discountedPrice,
    };
  }

  private findProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  private calculateDiscountedPrice(price: number, discountRate: number): number {
    return price * discountRate;
  }
}

// ✅ Espaciado vertical apropiado
// ✅ Líneas en blanco separan conceptos relacionados
// ✅ Métodos relacionados están cerca

interface OrderItem {
  price: number;
  quantity: number;
}

interface Order {
  id: number;
  customerId: number;
  items: OrderItem[];
  total: number;
  date: Date;
  status: string;
}

class OrderProcessor {
  private static readonly DISCOUNT_THRESHOLD = 100;
  private static readonly DISCOUNT_RATE = 0.9;

  private orders: Order[] = [];

  // ✅ Grupo 1: Procesamiento de órdenes
  public processOrder(customerId: number, items: OrderItem[], paymentMethod: string): boolean {
    if (!this.isValidOrder(customerId, items)) {
      return false;
    }

    const total = this.calculateTotal(items);
    const order = this.createOrder(customerId, items, total);

    this.saveOrder(order);
    this.logOrderProcessed(total);

    return true;
  }

  private isValidOrder(customerId: number, items: OrderItem[]): boolean {
    return customerId > 0 && items && items.length > 0;
  }

  private calculateTotal(items: OrderItem[]): number {
    let total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (total > OrderProcessor.DISCOUNT_THRESHOLD) {
      total = total * OrderProcessor.DISCOUNT_RATE;
    }

    return total;
  }

  private createOrder(customerId: number, items: OrderItem[], total: number): Order {
    return {
      id: Date.now(),
      customerId,
      items,
      total,
      date: new Date(),
      status: "pending",
    };
  }

  private saveOrder(order: Order): void {
    this.orders.push(order);
  }

  private logOrderProcessed(total: number): void {
    console.log(`Orden procesada: $${total}`);
  }

  // ✅ Grupo 2: Consultas de órdenes (separado por línea en blanco)
  public getOrders(): Order[] {
    return this.orders;
  }

  // ✅ Grupo 3: Cancelación de órdenes (separado por línea en blanco)
  public cancelOrder(orderId: number): boolean {
    const index = this.orders.findIndex((order) => order.id === orderId);

    if (index >= 0) {
      this.orders.splice(index, 1);
      return true;
    }

    return false;
  }
}

// ✅ Formato consistente en toda la clase
// ✅ Espaciado uniforme, indentación correcta

interface User {
  name: string;
  email: string;
  age: number;
  createdAt: Date;
}

class UserManager {
  private users: User[] = [];

  public addUser(name: string, email: string, age: number): User {
    const user: User = {
      name,
      email,
      age,
      createdAt: new Date(),
    };

    this.users.push(user);
    return user;
  }

  public findUser(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  public deleteUser(email: string): void {
    this.users = this.users.filter((user) => user.email !== email);
  }
}

// Uso - También con buen formato
console.log("=== Cumplimiento de Formato en Clean Code ===");

const service = new ProductService();
const product = service.findProductByIdAndUpdateStockAndCalculateDiscountAndSendNotification(1, 5, 0.8);
console.log(product);

const processor = new OrderProcessor();
const items: OrderItem[] = [{ price: 100, quantity: 2 }];
processor.processOrder(1, items, "credit_card");

export { ProductService, OrderProcessor, UserManager, Product, Order, OrderItem, User };
