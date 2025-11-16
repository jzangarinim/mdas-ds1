// Cumplimiento de Herencia: Reutilización mediante clase base
// ✅ Solución: Código común en clase padre, específico en hijos

// ✅ Clase base con comportamiento común
class Animal {
  // ✅ Propiedades comunes protegidas (accesibles en hijos)
  protected name: string;
  protected age: number;
  protected weight: number;

  constructor(name: string, age: number, weight: number) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  // ✅ Métodos comunes definidos una sola vez
  public eat(): void {
    console.log(`${this.name} está comiendo`);
    this.weight += 0.5;
  }

  public sleep(): void {
    console.log(`${this.name} está durmiendo`);
  }

  public getInfo(): string {
    return `Nombre: ${this.name}, Edad: ${this.age} años, Peso: ${this.weight}kg`;
  }

  // ✅ Método para que cada hijo implemente su sonido
  public makeSound(): void {
    console.log(`${this.name} hace un sonido`);
  }
}

// ✅ Dog hereda de Animal - sin duplicación
class Dog extends Animal {
  // ✅ Solo comportamiento específico de perros
  public makeSound(): void {
    console.log(`${this.name} dice: ¡Guau guau!`);
  }

  public fetch(): void {
    console.log(`${this.name} está trayendo la pelota`);
  }
}

// ✅ Cat hereda de Animal - sin duplicación
class Cat extends Animal {
  // ✅ Solo comportamiento específico de gatos
  public makeSound(): void {
    console.log(`${this.name} dice: ¡Miau miau!`);
  }

  public purr(): void {
    console.log(`${this.name} está ronroneando`);
  }
}

// ✅ Bird hereda de Animal - sin duplicación
class Bird extends Animal {
  // ✅ Solo comportamiento específico de pájaros
  public makeSound(): void {
    console.log(`${this.name} dice: ¡Pío pío!`);
  }

  public fly(): void {
    console.log(`${this.name} está volando`);
  }
}

// ✅ Código reutilizado y fácil de mantener
console.log("=== Cumplimiento de Herencia ===");

const dog = new Dog("Rex", 5, 25);
const cat = new Cat("Luna", 3, 4);
const bird = new Bird("Piolín", 1, 0.5);

// ✅ Métodos heredados funcionan igual
console.log(dog.getInfo());
dog.eat();
dog.makeSound();
dog.fetch();

console.log(cat.getInfo());
cat.eat();
cat.makeSound();
cat.purr();

console.log(bird.getInfo());
bird.eat();
bird.makeSound();
bird.fly();

// ✅ Si necesito cambiar eat() o sleep(), cambio una sola vez en Animal
// ✅ Nuevos animales heredan automáticamente el comportamiento común
// ✅ Consistencia garantizada

// ✅ Bonus: Puedo trabajar con tipo Animal
const animals: Animal[] = [dog, cat, bird];
console.log("\n=== Todos los animales ===");
animals.forEach((animal) => {
  animal.eat(); // ✅ Funciona para todos
  animal.makeSound(); // ✅ Cada uno con su sonido específico
});

export { Animal, Dog, Cat, Bird };
