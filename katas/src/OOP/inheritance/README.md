# OOP: Herencia - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender qué es la herencia en OOP
- Reutilizar código mediante clases base
- Usar `extends` y `protected` correctamente
- Evitar duplicación de código común

## 📋 El problema: Código duplicado

**Concepto:** _La herencia permite reutilizar código común en una clase padre_

### ¿Qué está mal aquí? 🚫

```typescript
class Dog {
  // ❌ Código duplicado
  private name: string;
  public eat() {
    /* ... */
  }
  public sleep() {
    /* ... */
  }
  public bark() {
    /* específico */
  }
}

class Cat {
  // ❌ Mismo código otra vez
  private name: string;
  public eat() {
    /* ... */
  } // ¡Duplicado!
  public sleep() {
    /* ... */
  } // ¡Duplicado!
  public meow() {
    /* específico */
  }
}
```

**Problemas:**

- **Duplicación masiva**: Mismo código en múltiples clases
- **Difícil de mantener**: Cambios deben hacerse en todos lados
- **Inconsistencias**: Fácil que las copias difieran
- **Más código**: Más líneas innecesarias

## 🔧 Tu tarea

1. **Estudia** `inheritance-bad.ts` - identifica código duplicado
2. **Implementa** tu solución en `inheritance-exercise.ts` antes de ver la propuesta
3. **Observa** `inheritance-good.ts` y compara con tu solución

## 🎯 Puntos clave

- Clase padre con código común
- Clases hijas heredan con `extends`
- `protected` para acceso en hijos
- Reutilización elimina duplicación

## ⏱️ Verificación rápida

Pregúntate:

- ¿Qué código se repite entre clases?
- ¿Qué comportamiento es común?
- ¿Puedo extraer una clase base?
