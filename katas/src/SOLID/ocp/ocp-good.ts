// Cumplimiento del OCP: Abierto para extensión, cerrado para modificación
// Solución: Usar interfaces para que se puedan agregar nuevos animales sin cambiar el código existente

interface Communicable {
  communicate(): string;
}

class Dog implements Communicable {
  public communicate(): string {
    return "woof woof";
  }
}

class Cat implements Communicable {
  public communicate(): string {
    return "meow meow";
  }
}

// ✅ Esta clase nunca necesita ser modificada al agregar nuevos animales
class Communication {
  public communicate(animal: Communicable): string {
    return animal.communicate();
  }

  public communicateMultiple(animals: Communicable[]): string[] {
    return animals.map((animal) => animal.communicate());
  }
}

// ✅ Agregar nuevos animales sin modificar el código existente
class Fox implements Communicable {
  public communicate(): string {
    return "ring-ding-ding-ding-dingeringeding";
  }
}

class Cow implements Communicable {
  public communicate(): string {
    return "moo moo";
  }
}

class Duck implements Communicable {
  public communicate(): string {
    return "quack quack";
  }
}

// Uso - ¡agregar Fox, Cow, Duck NO requirió cambios en las clases existentes!
const communication = new Communication();
const dog = new Dog();
const cat = new Cat();
const fox = new Fox();
const cow = new Cow();
const duck = new Duck();

console.log(communication.communicate(dog)); // "woof woof"
console.log(communication.communicate(cat)); // "meow meow"
console.log(communication.communicate(fox)); // "ring-ding-ding-ding-dingeringeding"
console.log(communication.communicate(cow)); // "moo moo"
console.log(communication.communicate(duck)); // "quack quack"

const allAnimals = [dog, cat, fox, cow, duck];
console.log(communication.communicateMultiple(allAnimals));

export { Communicable, Dog, Cat, Fox, Cow, Duck, Communication };
