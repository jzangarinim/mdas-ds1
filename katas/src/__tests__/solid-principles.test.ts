// Test file demonstrating how SOLID principles improve testability (Simplified Examples)

import { User, EmailService, UserFileManager } from "../SOLID/srp/srp-good";

import { Database, OrderService, MySQLDatabase } from "../SOLID/dip/dip-good";

import { Communication, Dog, Cat, Fox } from "../SOLID/ocp/ocp-good";

describe("SOLID Principles Tests (Simplified)", () => {
  // SRP: Easy to test individual responsibilities
  describe("Single Responsibility Principle", () => {
    test("User should manage user data correctly", () => {
      const user = new User("John Doe", "john@example.com");
      expect(user.getEmail()).toBe("john@example.com");
      expect(user.getName()).toBe("John Doe");
    });

    test("EmailService should handle email operations", () => {
      const emailService = new EmailService();
      const user = new User("John Doe", "john@example.com");
      const result = emailService.sendWelcomeEmail(user);
      expect(result).toContain("Enviando email de bienvenida a john@example.com");
    });

    test("UserFileManager should handle file operations", () => {
      const fileManager = new UserFileManager();
      const user = new User("John Doe", "john@example.com");
      const result = fileManager.saveToFile(user);
      expect(result).toContain("Guardando usuario John Doe en archivo");
    });
  });

  // DIP: Easy to mock dependencies
  describe("Dependency Inversion Principle", () => {
    test("OrderService should work with any Database implementation", () => {
      // Mock database for testing
      const mockDatabase: Database = {
        save: jest.fn().mockReturnValue("Mock save successful"),
      };

      const orderService = new OrderService(mockDatabase);
      orderService.processOrder("12345");

      // We can verify the database was called
      expect(mockDatabase.save).toHaveBeenCalledWith("Pedido 12345 procesado");
    });

    test("OrderService should work with MySQLDatabase", () => {
      const database = new MySQLDatabase();
      const orderService = new OrderService(database);

      // This should not throw any errors
      expect(() => orderService.processOrder("67890")).not.toThrow();
    });
  });

  // OCP: Easy to test new implementations without modifying existing code
  describe("Open/Closed Principle", () => {
    test("Communication should work with any Communicable animal", () => {
      const communication = new Communication();
      const dog = new Dog();
      const cat = new Cat();
      const fox = new Fox();

      expect(communication.communicate(dog)).toBe("woof woof");
      expect(communication.communicate(cat)).toBe("meow meow");
      expect(communication.communicate(fox)).toBe("ring-ding-ding-ding-dingeringeding");
    });

    test("Communication should handle arrays of different animals", () => {
      const communication = new Communication();
      const animals = [new Dog(), new Cat(), new Fox()];

      const sounds = communication.communicateMultiple(animals);

      expect(sounds).toEqual(["woof woof", "meow meow", "ring-ding-ding-ding-dingeringeding"]);
      expect(sounds).toHaveLength(3);
    });
  });
});

// Mock implementation for testing
class MockDatabase implements Database {
  public savedData: string[] = [];

  save(data: string): void {
    this.savedData.push(data);
  }

  getSavedData(): string[] {
    return this.savedData;
  }

  clear(): void {
    this.savedData = [];
  }
}

describe("DIP Testing Benefits", () => {
  test("MockDatabase should capture data for testing", () => {
    const mockDatabase = new MockDatabase();
    const orderService = new OrderService(mockDatabase);

    orderService.processOrder("TEST123");

    expect(mockDatabase.getSavedData()).toContain("Pedido TEST123 procesado");
    expect(mockDatabase.getSavedData()).toHaveLength(1);
  });
});

export { MockDatabase };
