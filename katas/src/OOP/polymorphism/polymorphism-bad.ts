// Violación de Polimorfismo: Lógica condicional para tipos
// ❌ Problema: Usar if/else o switch para diferentes tipos

// ❌ Sin herencia ni polimorfismo - solo objetos planos
interface DogData {
  type: "dog";
  name: string;
}

interface CatData {
  type: "cat";
  name: string;
}

interface BirdData {
  type: "bird";
  name: string;
}

type AnimalData = DogData | CatData | BirdData;

// ❌ Clase que necesita conocer todos los tipos específicos
class AnimalProcessor {
  // ❌ Método lleno de condicionales para cada tipo
  public makeSound(animal: AnimalData): void {
    if (animal.type === "dog") {
      console.log(`${animal.name} dice: ¡Guau guau!`);
    } else if (animal.type === "cat") {
      console.log(`${animal.name} dice: ¡Miau miau!`);
    } else if (animal.type === "bird") {
      console.log(`${animal.name} dice: ¡Pío pío!`);
    }
    // ❌ Si agrego un nuevo animal, debo modificar este método
  }

  // ❌ Más condicionales para cada comportamiento
  public feed(animal: AnimalData): void {
    if (animal.type === "dog") {
      console.log(`${animal.name} está comiendo croquetas`);
    } else if (animal.type === "cat") {
      console.log(`${animal.name} está comiendo pescado`);
    } else if (animal.type === "bird") {
      console.log(`${animal.name} está comiendo semillas`);
    }
  }

  // ❌ Y más condicionales para movimiento
  public move(animal: AnimalData): void {
    if (animal.type === "dog") {
      console.log(`${animal.name} está corriendo`);
    } else if (animal.type === "cat") {
      console.log(`${animal.name} está saltando`);
    } else if (animal.type === "bird") {
      console.log(`${animal.name} está volando`);
    }
  }
}

// ❌ Uso con condicionales por todos lados
console.log("=== Violación de Polimorfismo ===");

const processor = new AnimalProcessor();

const dog: DogData = { type: "dog", name: "Rex" };
const cat: CatData = { type: "cat", name: "Luna" };
const bird: BirdData = { type: "bird", name: "Piolín" };

const animals: AnimalData[] = [dog, cat, bird];

// ❌ El procesador debe verificar el tipo constantemente
animals.forEach((animal) => {
  processor.makeSound(animal);
  processor.feed(animal);
  processor.move(animal);
});

// ❌ Problemas:
// - Muchos if/else y switch repetidos
// - Agregar nuevo animal requiere modificar MUCHOS métodos
// - Propenso a errores (olvidar un caso)
// - Viola Open/Closed Principle
// - Difícil de mantener y escalar

export { AnimalData, DogData, CatData, BirdData, AnimalProcessor };
