// Violación del DIP: Clase de alto nivel depende directamente de clase de bajo nivel
// ❌ Problema: OrderService está fuertemente acoplado a MySQLDatabase

// Módulo de bajo nivel (implementación concreta)
class MySQLDatabase {
  public save(data: string): void {
    console.log(`Guardando en base de datos MySQL: ${data}`);
  }
}

// ❌ Módulo de alto nivel depende de módulo concreto de bajo nivel
class OrderService {
  private database: MySQLDatabase; // ❌ ¡Acoplamiento fuerte!

  constructor(database: MySQLDatabase) {
    this.database = database;
  }

  public processOrder(orderId: string): void {
    console.log(`Procesando pedido ${orderId}`);

    // ❌ ¡Directamente ligado a MySQL - no se puede cambiar de base de datos!
    this.database.save(`Pedido ${orderId} procesado`);
  }
}

// ❌ Problemas con este enfoque:
// 1. No se puede cambiar fácilmente a PostgreSQL, MongoDB, etc.
// 2. Difícil de probar (no se puede hacer mock de la base de datos fácilmente)
// 3. OrderService sabe demasiado sobre los detalles de la base de datos

const database = new MySQLDatabase();
const orderService = new OrderService(database);
orderService.processOrder("12345");

export { MySQLDatabase, OrderService };
