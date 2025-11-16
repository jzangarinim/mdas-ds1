# Patrón Builder - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender el problema del "constructor telescópico"
- Aprender cómo el patrón Builder proporciona creación de objetos fluida y legible
- Practicar encadenamiento de métodos con "return this"
- Ver cómo los builders manejan parámetros opcionales elegantemente

## 📋 El problema: Demasiados Parámetros

**Objetivo:** _Hacer que la creación de objetos complejos sea legible y flexible_

### ¿Qué está mal aquí? 🚫

```typescript
const computer = new Computer(
  "Intel i5", // cpu
  "8GB", // ram
  "256GB SSD", // storage
  undefined, // gpu (no necesario pero debe especificarse)
  true, // wifi (¿qué significa este booleano?)
  true // bluetooth (¡confuso!)
);
```

**Problemas:**

- Difícil recordar el orden de los parámetros
- Debe especificar parámetros opcionales incluso cuando no se necesitan
- No está claro qué significan los parámetros booleanos
- Fácil confundir el orden de los parámetros

## 🔧 Tu tarea

1. **Estudia** `builder-bad.ts` - identifica el constructor confuso
2. **Implementa** tu solución en `builder-exercise.ts` antes de ver la propuesta
3. **Observa** `builder-good.ts` y compara con tu solución

## 🎯 Puntos clave

- Separa construcción de representación
- Interfaz fluida hace código auto-documentado
- Encadenamiento de métodos con `return this`
- Parámetros opcionales solo cuando se necesitan

## ⏱️ Verificación rápida

Pregúntate:

- ¿Tengo muchos parámetros en el constructor?
- ¿Es confuso el orden de los parámetros?
- ¿Necesito hacer la construcción más legible?
