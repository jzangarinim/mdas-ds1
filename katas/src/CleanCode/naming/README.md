# Clean Code: Nombrado - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender la importancia de nombres con intención clara
- Evitar información falsa en los nombres
- Usar nombres pronunciables y sin codificaciones
- Eliminar números y strings mágicos con constantes descriptivas

## 📋 El problema: Nombres Poco Claros

**Regla:** _Los nombres deben revelar la intención y no engañar_

### ¿Qué está mal aquí? 🚫

```typescript
let d: number; // ❌ ¿Qué es 'd'?
const userList: Set<string> = new Set(); // ❌ No es una List
const yyyymmdstr = "20251102"; // ❌ Impronunciable
const strFirstName = "John"; // ❌ Codificación innecesaria

if (user.age < 18) {
  // ❌ ¿Por qué 18?
}
```

**Problemas:**

- **Sin intención**: `d` no dice nada sobre qué representa
- **Información falsa**: `userList` es un Set, no una List
- **Impronunciable**: `yyyymmdstr` es difícil de leer y pronunciar
- **Codificaciones**: `strFirstName` - TypeScript ya conoce el tipo
- **Números mágicos**: `18` - ¿qué significa este número?

## 🔧 Tu tarea

1. **Estudia** `naming-bad.ts` - identifica nombres poco claros y magic numbers
2. **Implementa** tu solución en `naming-exercise.ts` antes de ver la propuesta
3. **Observa** `naming-good.ts` y compara con tu solución

## 🎯 Puntos clave

- Nombres con intención clara
- Sin información falsa
- Nombres pronunciables
- Sin codificaciones innecesarias
- Constantes en lugar de números mágicos

## ⏱️ Verificación rápida

Pregúntate:

- ¿Los nombres revelan su propósito?
- ¿Hay números o strings sin explicación?
- ¿Son pronunciables y comprensibles?
