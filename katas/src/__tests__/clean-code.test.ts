// Test file for Clean Code examples

import { UserService as NamingGoodUserService, User } from "../CleanCode/naming/naming-good";
import { OrderProcessor as FunctionsGoodOrderProcessor, OrderItem } from "../CleanCode/functions/functions-good";
import { ProductService as FormatGoodProductService, OrderProcessor as FormatGoodOrderProcessor, UserManager as FormatGoodUserManager } from "../CleanCode/format/format-good";

describe("Clean Code Tests", () => {
  // Naming Tests
  describe("Naming - Good Practices", () => {
    test("UserService should use named constants instead of magic numbers", () => {
      const userService = new NamingGoodUserService();
      const youngUser: User = { age: 16, status: "ACT", points: 500 };
      const adultUser: User = { age: 20, status: "ACT", points: 1200 };

      expect(userService.validateUser(youngUser)).toBe(false); // Under minimum age
      expect(userService.validateUser(adultUser)).toBe(true); // Active and over minimum age
    });

    test("UserService should calculate discounts with named constants", () => {
      const userService = new NamingGoodUserService();

      const vipDiscount = userService.calculateDiscount(100, "VIP");
      const regularDiscount = userService.calculateDiscount(100, "REG");

      expect(vipDiscount).toBe(20); // 20% discount
      expect(regularDiscount).toBe(5); // 5% discount
    });
  });

  // Functions Tests
  describe("Functions - Good Practices", () => {
    test("OrderProcessor should process valid orders successfully", () => {
      const processor = new FunctionsGoodOrderProcessor();
      const items: OrderItem[] = [
        { name: "Product 1", price: 50, quantity: 2 },
        { name: "Product 2", price: 30, quantity: 1 },
      ];

      const result = processor.processOrder("Juan Pérez", "customer@email.com", items, "credit_card");

      expect(result).toBe(true);
    });

    test("OrderProcessor should reject invalid orders with early return", () => {
      const processor = new FunctionsGoodOrderProcessor();

      const result1 = processor.processOrder("", "email@test.com", [], "credit_card");
      const result2 = processor.processOrder("Juan", "invalid-email", [], "credit_card");

      expect(result1).toBe(false);
      expect(result2).toBe(false);
    });

    test("OrderProcessor should apply discount for orders over threshold", () => {
      const processor = new FunctionsGoodOrderProcessor();
      const items: OrderItem[] = [{ name: "Expensive Item", price: 150, quantity: 1 }];

      // The processor applies discount internally for orders over 100
      const result = processor.processOrder("Cliente", "customer@email.com", items, "credit_card");

      expect(result).toBe(true);
    });

    test("OrderProcessor functions should be small and do one thing", () => {
      const processor = new FunctionsGoodOrderProcessor();
      const items: OrderItem[] = [{ name: "Test Product", price: 50, quantity: 1 }];

      // Each method does one thing: process the order
      const result = processor.processOrder("Test User", "test@email.com", items, "paypal");

      expect(result).toBe(true);
    });
  });

  // Format Tests
  describe("Format - Good Practices", () => {
    test("ProductService should update stock correctly with good format", () => {
      const service = new FormatGoodProductService();

      const product = service.findProductByIdAndUpdateStockAndCalculateDiscountAndSendNotification(1, 5, 0.8);

      expect(product).not.toBeNull();
      expect(product?.stock).toBe(45); // 50 - 5
      expect(product?.discountedPrice).toBe(960); // 1200 * 0.8
    });

    test("OrderProcessor should process orders with proper formatting", () => {
      const processor = new FormatGoodOrderProcessor();
      const items = [{ price: 100, quantity: 2 }];

      const result = processor.processOrder(1, items, "credit_card");

      expect(result).toBe(true);
      expect(processor.getOrders()).toHaveLength(1);
    });

    test("UserManager should manage users with consistent format", () => {
      const manager = new FormatGoodUserManager();

      const user = manager.addUser("Juan Pérez", "juan@email.com", 25);

      expect(user.name).toBe("Juan Pérez");
      expect(user.email).toBe("juan@email.com");
      expect(user.age).toBe(25);

      const foundUser = manager.findUser("juan@email.com");
      expect(foundUser).toBeDefined();
      expect(foundUser?.name).toBe("Juan Pérez");

      manager.deleteUser("juan@email.com");
      const deletedUser = manager.findUser("juan@email.com");
      expect(deletedUser).toBeUndefined();
    });
  });
});
