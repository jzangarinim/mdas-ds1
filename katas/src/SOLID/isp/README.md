# Principio de Segregación de Interfaces (ISP) - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender qué hace que una interfaz sea "ancha" o "sobrecargada"
- Aprender a identificar implementaciones forzadas que no deberían existir
- Practicar la división de interfaces grandes en otras más pequeñas y enfocadas
- Ver cómo ISP mejora la seguridad en tiempo de compilación

## 📋 El problema: Interfaces anchas

**Regla:** _Ningún cliente debería ser forzado a implementar métodos que no usa_

### ¿Qué está mal aquí? 🚫

```typescript
// Interfaz ancha - fuerza a TODOS los trabajadores a implementar TODOS los métodos
interface Worker {
  work(): string;
  eat(): string; // ❌ ¡Los robots no comen!
  sleep(): string; // ❌ ¡Los robots no duermen!
}
```

**Problemas:**

- La clase `Robot` se ve forzada a implementar `eat()` y `sleep()`
- Debe escribir métodos sin sentido o lanzar errores
- Viola el principio de interfaces limpias y enfocadas

## 🔧 Tu tarea

1. **Estudia** `isp-bad.ts` - identifica la interfaz "ancha"
2. **Implementa** tu solución en `isp-exercise.ts` antes de ver la propuesta
3. **Observa** `isp-good.ts` y compara con tu solución

## 🎯 Puntos clave

- No fuerces implementaciones innecesarias
- Divide interfaces grandes en específicas
- Cada clase implementa solo lo que necesita
- Mejora limpieza y seguridad del código

## ⏱️ Verificación rápida

Pregúntate:

- ¿Esta interfaz obliga a implementar métodos no usados?
- ¿Puedo dividirla en interfaces más pequeñas?
- ¿Cada clase necesita todos estos métodos?
