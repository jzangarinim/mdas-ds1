# Clean Code: Formato - Ejemplo

## 🎯 Objetivos de aprendizaje

- Mantener líneas de código cortas (formato horizontal)
- Usar espaciado vertical para separar conceptos
- Aplicar formato consistente en todo el código
- Agrupar código relacionado y separar conceptos diferentes

## 📋 El problema: Código Difícil de Leer

**Regla:** _El formato del código debe facilitar su lectura y comprensión_

### ¿Qué está mal aquí? 🚫

```typescript
// ❌ Formato horizontal malo - línea demasiado larga
class ProductService {
  private products: any[] = [{ id: 1, name: "Laptop", price: 1200 }];
  public findProductById(id: number): any {
    return this.products.find((p) => p.id === id);
  }
}

// ❌ Formato vertical malo - todo junto sin espacios
class OrderProcessor {
  private orders: any[] = [];
  public processOrder(items: any[]): boolean {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price;
    }
    this.orders.push({ total });
    return true;
  }
  public getOrders(): any[] {
    return this.orders;
  }
}
```

**Problemas:**

- **Horizontal**: Líneas demasiado largas, difíciles de leer
- **Vertical**: Sin espacios entre métodos, todo amontonado
- **Inconsistente**: Mezcla de estilos de formato
- **Agrupación**: Código relacionado está separado

## 🔧 Tu tarea

1. **Estudia** `format-bad.ts` - intenta leer código con mal formato
2. **Implementa** tu solución en `format-exercise.ts` antes de ver la propuesta
3. **Observa** `format-good.ts` y compara con tu solución

## 🎯 Puntos clave

- Líneas cortas (80-120 caracteres)
- Espaciado vertical separa conceptos
- Formato consistente en todo el código
- Código relacionado agrupado junto

## ⏱️ Verificación rápida

Pregúntate:

- ¿Las líneas son cortas y legibles?
- ¿Hay espacios entre conceptos diferentes?
- ¿El formato es consistente?
