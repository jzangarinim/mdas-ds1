// Implementación del Patrón Builder: Construcción paso a paso con interfaz fluida
// ✅ Solución: Builder permite creación de objetos legible y flexible

// Clase Pizza con muchas propiedades opcionales
class Pizza {
  public size: string;
  public crust: string;
  public sauce: string;
  public cheese: string;
  public toppings: string[];
  public extraCheese: boolean;
  public spicyLevel: number;

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

// ✅ Builder con interfaz fluida
class PizzaBuilder {
  private size: string = "mediana";
  private crust: string = "regular";
  private sauce: string = "tomate";
  private cheese: string = "mozzarella";
  private toppings: string[] = [];
  private extraCheese: boolean = false;
  private spicyLevel: number = 0;

  public setSize(size: string): PizzaBuilder {
    this.size = size;
    return this; // ✅ Retorna 'this' para encadenamiento de métodos
  }

  public setCrust(crust: string): PizzaBuilder {
    this.crust = crust;
    return this;
  }

  public setSauce(sauce: string): PizzaBuilder {
    this.sauce = sauce;
    return this;
  }

  public setCheese(cheese: string): PizzaBuilder {
    this.cheese = cheese;
    return this;
  }

  public addTopping(topping: string): PizzaBuilder {
    this.toppings.push(topping);
    return this;
  }

  public withExtraCheese(): PizzaBuilder {
    this.extraCheese = true;
    return this;
  }

  public setSpicyLevel(level: number): PizzaBuilder {
    this.spicyLevel = level;
    return this;
  }

  public build(): Pizza {
    return new Pizza(
      this.size,
      this.crust,
      this.sauce,
      this.cheese,
      [...this.toppings], // Copia el array
      this.extraCheese,
      this.spicyLevel
    );
  }

  public reset(): PizzaBuilder {
    this.size = "mediana";
    this.crust = "regular";
    this.sauce = "tomate";
    this.cheese = "mozzarella";
    this.toppings = [];
    this.extraCheese = false;
    this.spicyLevel = 0;
    return this;
  }
}

// ✅ Beneficios del patrón builder:
console.log("=== Solución con Patrón Builder ===");

// Código legible y auto-documentado ✅
const margherita = new PizzaBuilder()
  .setSize("grande") // ✅ Claro qué es cada parámetro
  .setCrust("delgada")
  .setSauce("tomate")
  .setCheese("mozzarella")
  .addTopping("albahaca") // ✅ Fácil agregar ingredientes uno por uno
  .addTopping("tomates")
  .build();

// Fácil crear variaciones complejas ✅
const carnivora = new PizzaBuilder()
  .setSize("extra grande")
  .setCrust("gruesa")
  .setSauce("BBQ")
  .addTopping("pepperoni")
  .addTopping("salchicha")
  .addTopping("tocino")
  .addTopping("jamón")
  .withExtraCheese() // ✅ Características opcionales cuando se necesitan
  .setSpicyLevel(3)
  .build();

// Configuración mínima con valores por defecto ✅
const pizzaSimple = new PizzaBuilder().setSize("pequeña").addTopping("champiñones").build(); // ✅ Usa masa, salsa y queso por defecto

console.log("Margherita:", margherita.getDescription());
console.log("Carnívora:", carnivora.getDescription());
console.log("Pizza Simple:", pizzaSimple.getDescription());

export { Pizza, PizzaBuilder };
