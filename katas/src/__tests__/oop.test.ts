import { EmailSender as EmailSenderBad } from "../OOP/abstraction/abstraction-bad";
import { EmailSender as EmailSenderGood } from "../OOP/abstraction/abstraction-good";
import { BankAccount as BankAccountBad } from "../OOP/encapsulation/encapsulation-bad";
import { BankAccount as BankAccountGood } from "../OOP/encapsulation/encapsulation-good";
import { Dog as DogBad, Cat as CatBad } from "../OOP/inheritance/inheritance-bad";
import { Animal, Dog as DogGood, Cat as CatGood } from "../OOP/inheritance/inheritance-good";
import { AnimalProcessor as ProcessorBad, DogData, CatData } from "../OOP/polymorphism/polymorphism-bad";
import { Animal as AnimalPoly, Dog as DogPoly, Cat as CatPoly, AnimalProcessor as ProcessorGood } from "../OOP/polymorphism/polymorphism-good";

describe("OOP: Abstracción", () => {
  test("Mal ejemplo: expone detalles de implementación", () => {
    const emailSender = new EmailSenderBad();

    // ❌ Usuario debe conocer detalles internos
    expect(emailSender.smtpServer).toBe("smtp.gmail.com");
    expect(emailSender.smtpPort).toBe(587);
    expect(emailSender.isConnected).toBe(false);

    // ❌ Múltiples pasos manuales
    emailSender.authenticate("user@test.com", "pass");
    emailSender.connectToServer();
    expect(emailSender.isConnected).toBe(true);
  });

  test("Buen ejemplo: oculta detalles de implementación", () => {
    const emailSender = new EmailSenderGood("user@test.com", "pass");

    // ✅ Interfaz simple - un solo método
    const result = emailSender.sendEmail("to@test.com", "Subject", "Body");
    expect(result).toBe(true);

    // ✅ No se puede acceder a detalles internos (smtpServer es privado)
  });
});

describe("OOP: Encapsulamiento", () => {
  test("Mal ejemplo: sin protección de datos", () => {
    const account = new BankAccountBad("001", 1000);

    // ❌ Modificación directa sin validación
    account.balance = -5000; // ¡Balance negativo!
    expect(account.balance).toBe(-5000);

    // ❌ Cambiar número de cuenta directamente
    account.accountNumber = "999";
    expect(account.accountNumber).toBe("999");

    // ❌ Manipular historial
    account.transactionHistory = [];
    expect(account.transactionHistory.length).toBe(0);
  });

  test("Buen ejemplo: datos protegidos con validación", () => {
    const account = new BankAccountGood("001", 1000);

    // ✅ Solo lectura mediante getters
    expect(account.getBalance()).toBe(1000);
    expect(account.getAccountNumber()).toBe("001");

    // ✅ Validación de retiro excesivo
    const result = account.withdraw(2000);
    expect(result).toBe(false); // Fondos insuficientes
    expect(account.getBalance()).toBe(1000); // Balance sin cambios

    // ✅ Depósito válido
    account.deposit(500);
    expect(account.getBalance()).toBe(1500);

    // ✅ No se puede modificar balance directamente (balance es privado)
  });
});

describe("OOP: Herencia", () => {
  test("Mal ejemplo: código duplicado sin herencia", () => {
    const dog = new DogBad("Rex", 5, 25);
    const cat = new CatBad("Luna", 3, 4);

    // ❌ Cada clase tiene métodos duplicados
    expect(dog.getInfo()).toContain("Rex");
    expect(cat.getInfo()).toContain("Luna");

    // Métodos eat() y sleep() duplicados en ambas clases
    dog.eat();
    cat.eat();
  });

  test("Buen ejemplo: reutilización mediante herencia", () => {
    const dog = new DogGood("Rex", 5, 25);
    const cat = new CatGood("Luna", 3, 4);

    // ✅ Métodos heredados de Animal
    expect(dog.getInfo()).toContain("Rex");
    expect(cat.getInfo()).toContain("Luna");

    // ✅ Métodos comunes heredados (sin duplicación)
    dog.eat();
    cat.eat();

    // ✅ Métodos específicos
    dog.fetch();
    cat.purr();

    // ✅ Polimorfismo: ambos son Animals
    const animals: Animal[] = [dog, cat];
    expect(animals.length).toBe(2);
    animals.forEach((animal) => animal.eat()); // Funciona para todos
  });
});

describe("OOP: Polimorfismo", () => {
  test("Mal ejemplo: múltiples condicionales para tipos", () => {
    const processor = new ProcessorBad();

    const dog: DogData = { type: "dog", name: "Rex" };
    const cat: CatData = { type: "cat", name: "Luna" };

    // ❌ Procesador debe verificar tipos con if/else
    processor.makeSound(dog); // if (type === "dog")
    processor.makeSound(cat); // if (type === "cat")

    // ❌ Más condicionales en cada método
    processor.feed(dog);
    processor.move(dog);
  });

  test("Buen ejemplo: polimorfismo sin condicionales", () => {
    const dog = new DogPoly("Rex");
    const cat = new CatPoly("Luna");

    // ✅ Cada clase tiene su comportamiento
    dog.makeSound(); // Implementación específica de Dog
    cat.makeSound(); // Implementación específica de Cat

    // ✅ Procesador sin condicionales
    const animals: AnimalPoly[] = [dog, cat];
    const processor = new ProcessorGood();

    // ✅ Un solo método funciona para todos los tipos
    processor.processAnimals(animals); // Sin if/else

    // ✅ Fácil agregar nuevos tipos sin modificar código existente
    expect(animals.length).toBe(2);
  });

  test("Polimorfismo: agregar nuevo tipo sin modificar código", () => {
    // ✅ Definir nuevo tipo de animal
    class Fish extends AnimalPoly {
      constructor(name: string) {
        super(name);
      }
      makeSound(): void {}
      feed(): void {}
      move(): void {}
    }

    const fish = new Fish("Nemo");
    const dog = new DogPoly("Rex");

    // ✅ Funciona inmediatamente sin cambiar AnimalProcessor
    const animals: AnimalPoly[] = [dog, fish];
    const processor = new ProcessorGood();

    processor.processAnimals(animals);
    expect(animals.length).toBe(2);
  });
});
