// Violación del OCP: Debemos modificar el código existente para agregar nuevos animales
// ❌ Problema: Para agregar un nuevo animal, debemos modificar la clase Communication

class Dog {
  public makeSound(): string {
    return "woof woof";
  }
}

class Cat {
  public makeSound(): string {
    return "meow meow";
  }
}

class Fox {
  public makeSound(): string {
    return "ring-ding-ding-ding-dingeringeding";
  }
}

// ❌ Esta clase debe modificarse cada vez que agregamos un nuevo animal
class Communication {
  public communicate(animal: Dog | Cat | Fox): string {
    // ❌ Cadena de if/else que debe modificarse para cada nuevo animal
    if (animal instanceof Dog) {
      return animal.makeSound();
    } else if (animal instanceof Cat) {
      return animal.makeSound();
    } else if (animal instanceof Fox) {
      return animal.makeSound();
    } else {
      throw new Error("Animal desconocido");
    }
  }
}

// Uso
const communication = new Communication();
const dog = new Dog();
const cat = new Cat();
const fox = new Fox();

console.log(communication.communicate(dog)); // "woof woof"
console.log(communication.communicate(cat)); // "meow meow"
console.log(communication.communicate(fox)); // "ring-ding-ding-ding-dingeringeding"

// ❌ Problema: Para agregar Cow, debemos:
// 1. Crear la clase Cow
// 2. Modificar el tipo de parámetro en communicate() ❌
// 3. Agregar una nueva rama if/else ❌

export { Dog, Cat, Fox, Communication };
