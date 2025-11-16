// Violación de Clean Code: Mal Formato
// ❌ Problemas: Formato horizontal y vertical incorrecto

// ❌ Líneas demasiado largas (formato horizontal malo)
class ProductService {
  private products: any[] = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics", stock: 50, supplier: "TechCorp", warranty: "2 years" },
    { id: 2, name: "Mouse", price: 25, category: "Accessories", stock: 200, supplier: "TechCorp", warranty: "1 year" },
  ];
  public findProductByIdAndUpdateStockAndCalculateDiscountAndSendNotification(id: number, quantity: number, discountRate: number): any {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      product.stock -= quantity;
      const discountedPrice = product.price * discountRate;
      console.log(`Producto ${product.name} actualizado. Stock: ${product.stock}, Precio con descuento: ${discountedPrice}`);
      return { ...product, discountedPrice };
    }
    return null;
  }
}

// ❌ Sin espaciado vertical - todo junto
class OrderProcessor {
  private orders: any[] = [];
  public processOrder(customerId: number, items: any[], paymentMethod: string): boolean {
    if (!customerId || !items || items.length === 0) {
      return false;
    }
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price * items[i].quantity;
    }
    if (total > 100) {
      total = total * 0.9;
    }
    const order = { id: Date.now(), customerId, items, total, date: new Date(), status: "pending" };
    this.orders.push(order);
    console.log(`Orden procesada: $${total}`);
    return true;
  }
  public getOrders(): any[] {
    return this.orders;
  }
  public cancelOrder(orderId: number): boolean {
    const index = this.orders.findIndex((o) => o.id === orderId);
    if (index >= 0) {
      this.orders.splice(index, 1);
      return true;
    }
    return false;
  }
}

// ❌ Formato inconsistente y mezcla de estilos
class UserManager {
  private users: any[] = [];
  public addUser(name: string, email: string, age: number) {
    const user = { name: name, email: email, age: age, createdAt: new Date() };
    this.users.push(user);
    return user;
  }

  public findUser(email: string) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === email) {
        return this.users[i];
      }
    }
    return null;
  }

  public deleteUser(email: string) {
    this.users = this.users.filter((u: any) => u.email !== email);
  }
}

// Uso
console.log("=== Violación de Formato en Clean Code ===");
const service = new ProductService();
const product = service.findProductByIdAndUpdateStockAndCalculateDiscountAndSendNotification(1, 5, 0.8);
console.log(product);
const processor = new OrderProcessor();
processor.processOrder(1, [{ price: 100, quantity: 2 }], "credit_card");

export { ProductService, OrderProcessor, UserManager };
