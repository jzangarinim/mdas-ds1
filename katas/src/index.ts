// Main entry point demonstrating SOLID principles and Design Patterns

console.log("🎯 SOLID Principles & Design Patterns in TypeScript\n");
console.log("This project demonstrates the five SOLID principles and common design patterns with practical examples.\n");

console.log("📚 SOLID PRINCIPLES EXAMPLES:");

// Import SOLID examples
import "./SOLID/srp/srp-bad";
import "./SOLID/srp/srp-good";
import "./SOLID/ocp/ocp-bad";
import "./SOLID/ocp/ocp-good";
import "./SOLID/lsp/lsp-bad";
// import "./SOLID/lsp/lsp-good"; // Will be created later
import "./SOLID/isp/isp-bad";
import "./SOLID/isp/isp-good";
import "./SOLID/dip/dip-bad";
import "./SOLID/dip/dip-good";

console.log("\n🏗️ DESIGN PATTERNS EXAMPLES:");

// Import Design Pattern examples
import "./Patterns/factory/factory-bad";
import "./Patterns/factory/factory-good";
import "./Patterns/builder/builder-bad";
import "./Patterns/builder/builder-good";
import "./Patterns/adapter/adapter-bad";
import "./Patterns/adapter/adapter-good";
import "./Patterns/strategy/strategy-bad";
import "./Patterns/strategy/strategy-good";

console.log("\n✅ All examples have been executed.");
console.log("\n📖 DOCUMENTATION:");
console.log("\nSOLID Principles:");
console.log("- src/SOLID/srp/ - Single Responsibility Principle");
console.log("- src/SOLID/ocp/ - Open/Closed Principle");
console.log("- src/SOLID/lsp/ - Liskov Substitution Principle");
console.log("- src/SOLID/isp/ - Interface Segregation Principle");
console.log("- src/SOLID/dip/ - Dependency Inversion Principle");

console.log("\nDesign Patterns:");
console.log("- src/Patterns/factory/ - Factory Pattern (Object Creation)");
console.log("- src/Patterns/builder/ - Builder Pattern (Complex Object Construction)");
console.log("- src/Patterns/adapter/ - Adapter Pattern (Interface Compatibility)");
console.log("- src/Patterns/strategy/ - Strategy Pattern (Algorithm Selection)");

// SOLID Principles Exports (Simplified Examples)
export {
  // SRP exports
  User,
  EmailService,
  UserFileManager,
} from "./SOLID/srp/srp-good";

export {
  // OCP exports
  Communicable,
  Dog,
  Cat,
  Fox,
  Cow,
  Duck,
  Communication,
} from "./SOLID/ocp/ocp-good";

export {
  // LSP exports
  Animal,
  Flyable,
  Swimmable,
  Eagle,
  Penguin,
  Duck as LspDuck,
} from "./SOLID/lsp/lsp-good";

export {
  // ISP exports
  Workable,
  Eatable,
  Sleepable,
  Human,
  Robot,
  SuperHuman,
} from "./SOLID/isp/isp-good";

export {
  // DIP exports
  Database,
  MySQLDatabase,
  PostgreSQLDatabase,
  MongoDatabase,
  OrderService,
} from "./SOLID/dip/dip-good";

// Design Patterns Exports (Simplified Examples)
export {
  // Factory Pattern exports
  Notification,
  EmailNotification,
  SMSNotification,
  PushNotification,
  NotificationFactory,
  NotificationService,
} from "./Patterns/factory/factory-good";

export {
  // Builder Pattern exports
  Pizza,
  PizzaBuilder,
} from "./Patterns/builder/builder-good";

export {
  // Adapter Pattern exports
  AudioPlayer,
  MP3Player,
  WAVPlayer,
  MP3Adapter,
  WAVAdapter,
  MediaPlayer,
} from "./Patterns/adapter/adapter-good";

export {
  // Strategy Pattern exports
  DiscountStrategy,
  RegularCustomerDiscount,
  PremiumCustomerDiscount,
  VIPCustomerDiscount,
  EmployeeDiscount,
  DiscountCalculator,
} from "./Patterns/strategy/strategy-good";
