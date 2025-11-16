// Violación del Patrón Builder: Demasiados parámetros en el constructor
// ❌ Problema: Objetos complejos con muchos parámetros opcionales

class Pizza {
  public size: string;
  public crust: string;
  public sauce: string;
  public cheese: string;
  public toppings: string[];
  public extraCheese: boolean;
  public spicyLevel: number;

  // ❌ ¡Constructor telescópico - demasiados parámetros!
  constructor(size: string, crust: string, sauce: string, cheese: string, toppings: string[], extraCheese: boolean, spicyLevel: number) {
    this.size = size;
    this.crust = crust;
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
    this.extraCheese = extraCheese;
    this.spicyLevel = spicyLevel;
  }

  public getDescription(): string {
    return `Pizza ${this.size} con masa ${this.crust}, salsa ${this.sauce}, queso ${this.cheese}, ingredientes: ${this.toppings.join(", ")}${this.extraCheese ? ", queso extra" : ""}, nivel picante: ${this.spicyLevel}/5`;
  }
}

// ❌ Problemas al crear pizzas:
console.log("=== Violación del Patrón Builder ===");

// Difícil recordar el orden de los parámetros ❌
const margherita = new Pizza(
  "grande",
  "delgada",
  "tomate",
  "mozzarella",
  ["albahaca", "tomates"], // ❌ Debe crear array manualmente
  false, // ❌ ¿Qué significa este booleano?
  0 // ❌ ¿Y este número?
);

// Orden de parámetros confuso ❌
const carnivora = new Pizza("extra grande", "gruesa", "BBQ", "mozzarella", ["pepperoni", "salchicha", "tocino", "jamón"], true, 3);

console.log("Margherita:", margherita.getDescription());
console.log("Carnívora:", carnivora.getDescription());

export { Pizza };
