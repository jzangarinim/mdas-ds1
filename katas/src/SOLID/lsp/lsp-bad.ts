// Violación del LSP: Las clases derivadas rompen las expectativas de la clase padre
// ❌ Problema: FlyingBird asume que TODOS los pájaros pueden volar

class Bird {
  public fly(): string {
    return "¡Volando alto en el cielo!";
  }

  public eat(): string {
    return "Comiendo deliciosa comida";
  }
}

// ❌ Problema: Penguin ES-UN Bird, ¡pero no puede volar!
class Penguin extends Bird {
  public fly(): string {
    // ❌ Esto viola LSP - rompe la expectativa del padre
    throw new Error("¡Los pingüinos no pueden volar!"); // ¡Comportamiento roto!
  }

  public swim(): string {
    return "Nadando con gracia";
  }
}

class Eagle extends Bird {
  public fly(): string {
    return "¡Volando como un águila!";
  }
}

// Esta función espera que TODOS los pájaros vuelen ❌
function makeBirdFly(bird: Bird): string {
  return bird.fly(); // ¡Esto lanzará un error para Penguin!
}

// Probando la violación
console.log("=== Demostración de Violación LSP ===");

const eagle = new Eagle();
const penguin = new Penguin();

console.log("Águila:", makeBirdFly(eagle)); // ✅ Funciona bien

try {
  console.log("Pingüino:", makeBirdFly(penguin)); // ❌ ¡SE ROMPE!
} catch (error) {
  console.log("ERROR:", (error as Error).message);
}

export { Bird, Penguin, Eagle, makeBirdFly };
