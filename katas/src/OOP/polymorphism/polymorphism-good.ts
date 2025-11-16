// Cumplimiento de Polimorfismo: Comportamiento específico sin condicionales
// ✅ Solución: Cada clase implementa su propio comportamiento

// ✅ Clase base define la interfaz común
abstract class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  // ✅ Métodos abstractos - cada hijo DEBE implementarlos
  abstract makeSound(): void;
  abstract feed(): void;
  abstract move(): void;

  // ✅ Método común para todos
  public introduce(): void {
    console.log(`\nSoy ${this.name}:`);
  }
}

// ✅ Cada clase implementa su comportamiento específico
class Dog extends Animal {
  public makeSound(): void {
    console.log(`${this.name} dice: ¡Guau guau!`);
  }

  public feed(): void {
    console.log(`${this.name} está comiendo croquetas`);
  }

  public move(): void {
    console.log(`${this.name} está corriendo`);
  }
}

class Cat extends Animal {
  public makeSound(): void {
    console.log(`${this.name} dice: ¡Miau miau!`);
  }

  public feed(): void {
    console.log(`${this.name} está comiendo pescado`);
  }

  public move(): void {
    console.log(`${this.name} está saltando`);
  }
}

class Bird extends Animal {
  public makeSound(): void {
    console.log(`${this.name} dice: ¡Pío pío!`);
  }

  public feed(): void {
    console.log(`${this.name} está comiendo semillas`);
  }

  public move(): void {
    console.log(`${this.name} está volando`);
  }
}

// ✅ Procesador sin condicionales - usa polimorfismo
class AnimalProcessor {
  // ✅ Método genérico - funciona con cualquier Animal
  public processAnimals(animals: Animal[]): void {
    animals.forEach((animal) => {
      animal.introduce();
      animal.makeSound(); // ✅ Llama al método correcto automáticamente
      animal.feed(); // ✅ Sin if/else
      animal.move(); // ✅ Sin switch
    });
  }
}

// ✅ Uso limpio sin condicionales
console.log("=== Cumplimiento de Polimorfismo ===");

const dog = new Dog("Rex");
const cat = new Cat("Luna");
const bird = new Bird("Piolín");

// ✅ Array de tipo Animal - polimorfismo en acción
const animals: Animal[] = [dog, cat, bird];

const processor = new AnimalProcessor();

// ✅ Un solo método procesa todos los tipos sin verificar
processor.processAnimals(animals);

// ✅ Agregar nuevo animal es fácil - solo crear la clase
class Fish extends Animal {
  public makeSound(): void {
    console.log(`${this.name} hace burbujas: glu glu`);
  }

  public feed(): void {
    console.log(`${this.name} está comiendo algas`);
  }

  public move(): void {
    console.log(`${this.name} está nadando`);
  }
}

const fish = new Fish("Nemo");
console.log("\n=== Nuevo animal agregado sin modificar código existente ===");

// ✅ Funciona inmediatamente sin cambiar AnimalProcessor
processor.processAnimals([fish]);

// ✅ Beneficios:
// - Sin if/else ni switch
// - Agregar nuevos animales no modifica código existente
// - Cada clase tiene su lógica encapsulada
// - Respeta Open/Closed Principle
// - Fácil de mantener y escalar

export { Animal, Dog, Cat, Bird, Fish, AnimalProcessor };
