// Violación del ISP: Interfaz ancha fuerza a las clases a implementar métodos que no usan
// Problema: Todos los trabajadores deben implementar todos los métodos, incluso si no los necesitan

interface Worker {
  work(): string;
  eat(): string;
  sleep(): string;
}

class Human implements Worker {
  public work(): string {
    return "Humano trabajando";
  }

  public eat(): string {
    return "Humano comiendo";
  }

  public sleep(): string {
    return "Humano durmiendo";
  }
}

class Robot implements Worker {
  public work(): string {
    return "Robot trabajando";
  }

  // ❌ Los robots no comen, pero están forzados a implementar esto
  public eat(): string {
    throw new Error("¡Los robots no comen!");
  }

  // ❌ Los robots no duermen, pero están forzados a implementar esto
  public sleep(): string {
    throw new Error("¡Los robots no duermen!");
  }
}

// Uso mostrando el problema
const human = new Human();
const robot = new Robot();

console.log(human.work()); // ✅ Funciona
console.log(human.eat()); // ✅ Funciona
console.log(human.sleep()); // ✅ Funciona

console.log(robot.work()); // ✅ Funciona
// console.log(robot.eat());   // ❌ ¡Lanza error!
// console.log(robot.sleep()); // ❌ ¡Lanza error!

export { Worker, Human, Robot };
