// Test file for Design Patterns demonstrating their benefits for testability (Simplified Examples)

import { Notification, NotificationFactory, NotificationService } from "../Patterns/factory/factory-good";

import { Pizza, PizzaBuilder } from "../Patterns/builder/builder-good";

import { AudioPlayer, MP3Adapter, WAVAdapter, MediaPlayer } from "../Patterns/adapter/adapter-good";

import { DiscountStrategy, RegularCustomerDiscount, VIPCustomerDiscount, DiscountCalculator } from "../Patterns/strategy/strategy-good";

describe("Design Patterns Tests (Simplified)", () => {
  // Factory Pattern Tests
  describe("Factory Pattern", () => {
    test("NotificationFactory should create correct notification types", () => {
      const emailNotification = NotificationFactory.create("email");
      const smsNotification = NotificationFactory.create("sms");
      const pushNotification = NotificationFactory.create("push");

      expect(emailNotification.send("Test message")).toBe("EMAIL: Test message");
      expect(smsNotification.send("Test message")).toBe("SMS: Test message");
      expect(pushNotification.send("Test message")).toBe("PUSH: Test message");
    });

    test("Factory should handle unknown notification types", () => {
      expect(() => {
        NotificationFactory.create("fax");
      }).toThrow("Tipo de notificación desconocido: fax");
    });

    test("NotificationService should use factory correctly", () => {
      const service = new NotificationService();

      expect(service.sendNotification("email", "Hello")).toBe("EMAIL: Hello");
      expect(service.sendNotification("sms", "Hello")).toBe("SMS: Hello");
      expect(service.sendNotification("push", "Hello")).toBe("PUSH: Hello");
    });
  });

  // Builder Pattern Tests
  describe("Builder Pattern", () => {
    test("PizzaBuilder should create pizza with fluent interface", () => {
      const builder = new PizzaBuilder();
      const pizza = builder.setSize("large").setCrust("thin").setSauce("tomato").setCheese("mozzarella").addTopping("pepperoni").addTopping("mushrooms").withExtraCheese().setSpicyLevel(3).build();

      expect(pizza.size).toBe("large");
      expect(pizza.crust).toBe("thin");
      expect(pizza.sauce).toBe("tomato");
      expect(pizza.cheese).toBe("mozzarella");
      expect(pizza.toppings).toContain("pepperoni");
      expect(pizza.toppings).toContain("mushrooms");
      expect(pizza.extraCheese).toBe(true);
      expect(pizza.spicyLevel).toBe(3);
    });

    test("Builder should create pizzas with defaults", () => {
      const builder = new PizzaBuilder();
      const pizza = builder.setSize("small").addTopping("basil").build();

      expect(pizza.size).toBe("small");
      expect(pizza.crust).toBe("regular"); // Default
      expect(pizza.sauce).toBe("tomate"); // Default
      expect(pizza.cheese).toBe("mozzarella"); // Default
      expect(pizza.toppings).toContain("basil");
      expect(pizza.extraCheese).toBe(false); // Default
    });

    test("Pizza should provide readable description", () => {
      const pizza = new PizzaBuilder().setSize("extra large").setCrust("thick").addTopping("bacon").addTopping("sausage").withExtraCheese().setSpicyLevel(5).build();

      const description = pizza.getDescription();
      expect(description).toContain("extra large");
      expect(description).toContain("thick");
      expect(description).toContain("bacon");
      expect(description).toContain("sausage");
      expect(description).toContain("queso extra");
      expect(description).toContain("nivel picante: 5");
    });
  });

  // Adapter Pattern Tests
  describe("Adapter Pattern", () => {
    test("Adapters should provide unified interface for different audio formats", () => {
      const mp3Adapter = new MP3Adapter();
      const wavAdapter = new WAVAdapter();

      expect(mp3Adapter.play("song.mp3")).toBe("Reproduciendo MP3: song.mp3");
      expect(wavAdapter.play("sound.wav")).toBe("Reproduciendo archivo WAV: sound.wav");
    });

    test("MediaPlayer should handle different audio formats", () => {
      const player = new MediaPlayer();

      expect(player.playAudio("song.mp3")).toBe("Reproduciendo MP3: song.mp3");
      expect(player.playAudio("sound.wav")).toBe("Reproduciendo archivo WAV: sound.wav");
    });

    test("MediaPlayer should handle unsupported formats", () => {
      const player = new MediaPlayer();

      expect(player.playAudio("video.avi")).toBe("Tipo de archivo no soportado: avi");
    });
  });

  // Strategy Pattern Tests
  describe("Strategy Pattern", () => {
    test("Different discount strategies should calculate different amounts", () => {
      const regularStrategy = new RegularCustomerDiscount();
      const vipStrategy = new VIPCustomerDiscount();

      expect(regularStrategy.calculateDiscount(100)).toBe(0);
      expect(vipStrategy.calculateDiscount(100)).toBe(20);
    });

    test("DiscountCalculator should work with any strategy", () => {
      const calculator = new DiscountCalculator(new RegularCustomerDiscount());

      expect(calculator.calculateDiscount(100)).toBe(0);
      expect(calculator.getDiscountInfo()).toBe("Cliente regular - sin descuento");

      calculator.setStrategy(new VIPCustomerDiscount());
      expect(calculator.calculateDiscount(100)).toBe(20);
      expect(calculator.getDiscountInfo()).toBe("Cliente VIP - 20% de descuento");
    });
  });
});
