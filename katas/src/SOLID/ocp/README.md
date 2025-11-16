# Principio Abierto/Cerrado (OCP)

## 🎯 Definición del Principio

> "Las entidades de software deben estar abiertas para extensión pero cerradas para modificación"

Las clases deben estar **abiertas para extensión** (puedes agregar nueva funcionalidad) pero **cerradas para modificación** (no deberías cambiar el código existente).

## 📖 El problema (ocp-bad.ts)

La clase `AreaCalculator` debe ser **modificada** cada vez que agregamos una nueva forma:

```typescript
class AreaCalculator {
  public calculateArea(shape: Rectangle | Circle): number {
    if (shape instanceof Rectangle) {
      return shape.width * shape.height;
    } else if (shape instanceof Circle) {
      return Math.PI * shape.radius * shape.radius;
    } else {
      throw new Error("Forma desconocida"); // ❌ Debe agregar nuevo if/else
    }
  }
}
```

### ¿Por qué es esto malo?

- Agregar `Triangle` requiere **modificar** `AreaCalculator` ❌
- Debe agregar nuevas ramas `if/else` ❌
- Riesgo de romper el código existente ❌
- Viola la regla "cerrado para modificación" ❌

## ✅ La solución (ocp-good.ts)

Usar una **interfaz** para que se puedan agregar nuevas formas **sin cambiar** el código existente:

```typescript
// Definir qué deben hacer todas las formas ✅
interface Shape {
  calculateArea(): number;
}

// Cada forma sabe cómo calcular su propia área ✅
class Rectangle implements Shape {
  public calculateArea(): number {
    return this.width * this.height;
  }
}

// ¡El calculador nunca necesita cambiar! ✅
class AreaCalculator {
  public calculateArea(shape: Shape): number {
    return shape.calculateArea(); // Solo llamar al método de la interfaz
  }
}

// ¡Agregar nuevas formas sin modificar código existente! ✅
class Triangle implements Shape {
  public calculateArea(): number {
    return (this.base * this.height) / 2;
  }
}
```

### ¿Por qué es esto mejor?

- **Abierto para extensión**: Fácil de agregar nuevas formas ✅
- **Cerrado para modificación**: Nunca cambiar código existente ✅
- Sin riesgo de romper funcionalidad existente ✅
- Cada forma gestiona su propio cálculo ✅

## 🔧 Tu tarea

1. **Estudia** `ocp-bad.ts` - ve cómo agregar animales requiere modificación
2. **Implementa** tu solución en `ocp-exercise.ts` antes de ver la propuesta
3. **Observa** `ocp-good.ts` y compara con tu solución

## 🎯 Puntos clave

- Abierto para extensión, cerrado para modificación
- Usa interfaces para comportamiento polimórfico
- Nuevas funcionalidades sin cambiar código existente
- Reduce riesgo de romper lo que funciona

## ⏱️ Verificación rápida

Pregúntate:

- ¿Qué comportamiento comparten las clases?
- ¿Cómo hago el código extensible sin modificarlo?
- ¿Qué interfaz necesito?
