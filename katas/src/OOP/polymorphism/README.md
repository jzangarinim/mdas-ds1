# OOP: Polimorfismo - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender qué es el polimorfismo en OOP
- Eliminar condicionales usando comportamiento polimórfico
- Usar clases abstractas y métodos abstractos
- Aplicar el principio Open/Closed con polimorfismo

## 📋 El problema: Lógica condicional repetida

**Concepto:** _El polimorfismo permite que objetos de diferentes clases respondan al mismo mensaje de forma específica_

### ¿Qué está mal aquí? 🚫

```typescript
class AnimalProcessor {
  public makeSound(animal: AnimalData): void {
    if (animal.type === "dog") {
      console.log("Guau!");
    } else if (animal.type === "cat") {
      console.log("Miau!");
    } else if (animal.type === "bird") {
      console.log("Pío!");
    }
    // ❌ Si agrego un pez, debo modificar ESTE método
  }

  public feed(animal: AnimalData): void {
    if (animal.type === "dog") {
      /* ... */
    } else if (animal.type === "cat") {
      /* ... */
    }
    // ❌ Más if/else repetidos
  }
}
```

**Problemas:**

- **Condicionales repetidas**: if/else o switch en muchos lugares
- **Difícil de extender**: Agregar tipo requiere modificar múltiples métodos
- **Viola OCP**: Código existente debe cambiar para nuevas funcionalidades
- **Propenso a errores**: Fácil olvidar actualizar un caso

## 🔧 Tu tarea

1. **Estudia** `polymorphism-bad.ts` - identifica múltiples if/else
2. **Implementa** tu solución en `polymorphism-exercise.ts` antes de ver la propuesta
3. **Observa** `polymorphism-good.ts` y compara con tu solución

## 🎯 Puntos clave

- Elimina if/else verificando tipos
- Clase abstracta con métodos abstractos
- Cada hijo implementa su comportamiento
- Fácil agregar nuevos tipos sin modificar

## ⏱️ Verificación rápida

Pregúntate:

- ¿Tengo if/else verificando tipos?
- ¿Cada clase puede saber su comportamiento?
- ¿Puedo usar clase abstracta?
