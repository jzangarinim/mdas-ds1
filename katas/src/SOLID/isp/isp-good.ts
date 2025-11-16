// Cumplimiento del ISP: Dividir interfaz ancha en interfaces más pequeñas y enfocadas
// Solución: Crear interfaces separadas para diferentes capacidades

// Interfaces separadas para diferentes capacidades ✅
interface Workable {
  work(): string;
}

interface Eatable {
  eat(): string;
}

interface Sleepable {
  sleep(): string;
}

// Human implementa todas las interfaces (necesita todas las capacidades) ✅
class Human implements Workable, Eatable, Sleepable {
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

// Robot solo implementa lo que necesita ✅
class Robot implements Workable {
  public work(): string {
    return "Robot trabajando";
  }
  // ✅ ¡No necesita implementar eat() o sleep()!
}

// SuperHuman puede trabajar y tiene habilidades especiales
class SuperHuman implements Workable, Sleepable {
  public work(): string {
    return "SuperHumano trabajando a super velocidad";
  }

  public sleep(): string {
    return "SuperHumano durmiendo brevemente";
  }
  // ✅ No necesita comer (obtiene energía del sol)
}

// Uso - ¡sin más implementaciones forzadas!
const human = new Human();
const robot = new Robot();
const superHuman = new SuperHuman();

console.log(human.work()); // ✅ Funciona
console.log(human.eat()); // ✅ Funciona
console.log(human.sleep()); // ✅ Funciona

console.log(robot.work()); // ✅ Funciona
// robot.eat() - El método no existe (¡seguro en tiempo de compilación!)

console.log(superHuman.work()); // ✅ Funciona
console.log(superHuman.sleep()); // ✅ Funciona

export { Workable, Eatable, Sleepable, Human, Robot, SuperHuman };
