# Patrón Strategy - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender cuándo las cadenas if/else indican necesidad del patrón Strategy
- Aprender cómo extraer algoritmos en clases de estrategia separadas
- Practicar la creación de implementaciones de algoritmos intercambiables
- Ver cómo las estrategias permiten cambiar algoritmos en tiempo de ejecución

## 📋 El problema: Elecciones de algoritmos codificadas

**Objetivo:** _Hacer que los algoritmos sean intercambiables sin modificar el código cliente_

### ¿Qué está mal aquí? 🚫

```typescript
class DiscountCalculator {
  calculateDiscount(customerType: string, orderAmount: number) {
    if (customerType === "regular") {
      return 0;
    } else if (customerType === "premium") {
      return orderAmount * 0.1;
    } else if (customerType === "vip") {
      return orderAmount * 0.2;
    }
    // Agregar nuevo tipo de cliente significa modificar este método ❌
  }
}
```

**Problemas:**

- Todos los algoritmos mezclados en un método
- Agregar nuevos tipos de cliente requiere modificar código existente
- No se pueden probar fácilmente algoritmos de descuento individuales
- Viola el Principio Abierto/Cerrado

## 🔧 Tu tarea

1. **Estudia** `strategy-bad.ts` - identifica los múltiples if/else
2. **Implementa** tu solución en `strategy-exercise.ts` antes de ver la propuesta
3. **Observa** `strategy-good.ts` y compara con tu solución

## 🎯 Puntos clave

- Encapsula algoritmos en clases separadas
- Algoritmos intercambiables en tiempo de ejecución
- Fácil agregar nuevas estrategias
- Elimina condicionales complejos

## ⏱️ Verificación rápida

Pregúntate:

- ¿Tengo múltiples if/else para algoritmos?
- ¿Necesito cambiar comportamiento en runtime?
- ¿Puedo separar cada algoritmo en su clase?
