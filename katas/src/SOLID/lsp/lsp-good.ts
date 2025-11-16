// Cumplimiento del LSP: Jerarquía de herencia apropiada que no rompe expectativas
// ✅ Solución: Usar abstracciones apropiadas que coincidan con el comportamiento del mundo real

// Clase base para comportamiento común ✅
abstract class Animal {
  abstract eat(): string;
  abstract makeSound(): string;
}

// Interfaces separadas para diferentes capacidades ✅
interface Flyable {
  fly(): string;
}

interface Swimmable {
  swim(): string;
}

// Aves que SÍ pueden volar ✅
class Eagle extends Animal implements Flyable {
  public eat(): string {
    return "Águila comiendo pescado";
  }

  public makeSound(): string {
    return "Águila: ¡Graznido!";
  }

  public fly(): string {
    return "¡Águila volando alto!";
  }
}

// Aves que NO pueden volar pero pueden nadar ✅
class Penguin extends Animal implements Swimmable {
  public eat(): string {
    return "Pingüino comiendo pescado";
  }

  public makeSound(): string {
    return "Pingüino: ¡Graznido!";
  }

  public swim(): string {
    return "Pingüino nadando con gracia";
  }
}

// Aves que pueden hacer ambas cosas ✅
class Duck extends Animal implements Flyable, Swimmable {
  public eat(): string {
    return "Pato comiendo semillas";
  }

  public makeSound(): string {
    return "Pato: ¡Cuac!";
  }

  public fly(): string {
    return "Pato volando al estanque";
  }

  public swim(): string {
    return "Pato chapoteando en el agua";
  }
}

// Funciones que funcionan con contratos apropiados ✅
function feedAnimal(animal: Animal): string {
  return animal.eat(); // ✅ TODOS los animales pueden comer
}

function makeFlyableCreatureFly(creature: Flyable): string {
  return creature.fly(); // ✅ Solo cosas que SÍ pueden volar
}

function makeSwimmableCreatureSwim(creature: Swimmable): string {
  return creature.swim(); // ✅ Solo cosas que SÍ pueden nadar
}

// Probando - ¡sin fallos! ✅
console.log("=== Pruebas de Animales con LSP ===");

const eagle = new Eagle();
const penguin = new Penguin();
const duck = new Duck();

// Todos los animales pueden ser tratados de la misma manera ✅
console.log("Alimentando:", feedAnimal(eagle));
console.log("Alimentando:", feedAnimal(penguin));
console.log("Alimentando:", feedAnimal(duck));

// Solo a las criaturas voladoras se les pide volar ✅
console.log("Volando:", makeFlyableCreatureFly(eagle));
console.log("Volando:", makeFlyableCreatureFly(duck));
// ¡penguin no se le pide volar - seguro en tiempo de compilación!

// Solo a las criaturas nadadoras se les pide nadar ✅
console.log("Nadando:", makeSwimmableCreatureSwim(penguin));
console.log("Nadando:", makeSwimmableCreatureSwim(duck));
// ¡eagle no se le pide nadar - seguro en tiempo de compilación!

export { Animal, Flyable, Swimmable, Eagle, Penguin, Duck, feedAnimal, makeFlyableCreatureFly, makeSwimmableCreatureSwim };
