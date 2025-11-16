# Principio de Inversión de Dependencias (DIP) - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender la diferencia entre módulos de alto nivel y bajo nivel
- Aprender por qué las dependencias directas crean acoplamiento fuerte
- Practicar el uso de interfaces para invertir dependencias
- Ver cómo el DIP mejora la capacidad de prueba y flexibilidad

## 📋 El problema: Dependencias directas

**Regla:** _Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones._

### ¿Qué está mal aquí? 🚫

```typescript
class OrderService {
  private database: MySQLDatabase; // ❌ ¡Acoplamiento fuerte!

  constructor(database: MySQLDatabase) {
    this.database = database;
  }
}
```

**Problemas:**

- `OrderService` (alto nivel) depende directamente de `MySQLDatabase` (bajo nivel)
- No se puede cambiar fácilmente a PostgreSQL o MongoDB
- Difícil de probar (debe usar base de datos real)
- Los cambios en la base de datos afectan a OrderService

## 🔧 Tu tarea

1. **Estudia** `dip-bad.ts` - identifica el acoplamiento fuerte
2. **Implementa** tu solución en `dip-exercise.ts` antes de ver la propuesta
3. **Observa** `dip-good.ts` y compara con tu solución

## 🎯 Puntos clave

- Depende de abstracciones, no de concretos
- Alto nivel no debe depender de bajo nivel
- Interfaces invierten la dependencia
- Facilita pruebas y cambio de implementaciones

## ⏱️ Verificación rápida

Pregúntate:

- ¿Dependo de una clase concreta o de una interfaz?
- ¿Puedo cambiar la implementación fácilmente?
- ¿Es fácil probar este código con mocks?
