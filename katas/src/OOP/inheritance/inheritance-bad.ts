// Violación de Herencia: Código duplicado sin reutilización
// ❌ Problema: Lógica repetida en cada clase

class Dog {
  // ❌ Código duplicado en todas las clases de animales
  private name: string;
  private age: number;
  private weight: number;

  constructor(name: string, age: number, weight: number) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  // ❌ Métodos comunes duplicados
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

  // Método específico
  public bark(): void {
    console.log(`${this.name} dice: ¡Guau guau!`);
  }
}

class Cat {
  // ❌ Mismo código duplicado otra vez
  private name: string;
  private age: number;
  private weight: number;

  constructor(name: string, age: number, weight: number) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  // ❌ Métodos comunes duplicados exactamente igual
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

  // Método específico
  public meow(): void {
    console.log(`${this.name} dice: ¡Miau miau!`);
  }
}

class Bird {
  // ❌ Y otra vez el mismo código duplicado
  private name: string;
  private age: number;
  private weight: number;

  constructor(name: string, age: number, weight: number) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  // ❌ Métodos comunes duplicados una tercera vez
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

  // Método específico
  public chirp(): void {
    console.log(`${this.name} dice: ¡Pío pío!`);
  }
}

// ❌ Mucho código duplicado y difícil de mantener
console.log("=== Violación de Herencia ===");

const dog = new Dog("Rex", 5, 25);
const cat = new Cat("Luna", 3, 4);
const bird = new Bird("Piolín", 1, 0.5);

console.log(dog.getInfo());
dog.eat();
dog.bark();

console.log(cat.getInfo());
cat.eat();
cat.meow();

console.log(bird.getInfo());
bird.eat();
bird.chirp();

// ❌ Si necesito cambiar eat() o sleep(), debo modificar 3 clases
// ❌ Si agrego más animales, más duplicación
// ❌ Propenso a inconsistencias

export { Dog, Cat, Bird };
