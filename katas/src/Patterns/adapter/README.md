# Patrón Adapter - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender cuándo necesitas trabajar con interfaces incompatibles
- Aprender cómo los adaptadores convierten una interfaz en otra
- Practicar la creación de adaptadores que envuelven clases existentes
- Ver cómo los adaptadores permiten reutilización de código sin modificación

## 📋 El problema: Interfaces Incompatibles

**Objetivo:** _Hacer que clases incompatibles trabajen juntas sin modificarlas_

### ¿Qué está mal aquí? 🚫

```typescript
class MediaPlayer {
  playAudio(fileType: string, filename: string) {
    if (fileType === "mp3") {
      const player = new MP3Player();
      return player.playMP3(filename); // ❌ Nombre de método diferente
    } else if (fileType === "wav") {
      const player = new WAVPlayer();
      return player.playWAVFile(filename); // ❌ Nombre de método diferente
    }
  }
}
```

**Problemas:**

- Cada reproductor de terceros tiene nombres de métodos diferentes
- El código cliente debe conocer cada interfaz específica
- No se puede tratar todos los reproductores de audio de la misma manera
- Agregar nuevos formatos requiere modificar código existente

## 🔧 Tu tarea

1. **Estudia** `adapter-bad.ts` - identifica las interfaces incompatibles
2. **Implementa** tu solución en `adapter-exercise.ts` antes de ver la propuesta
3. **Observa** `adapter-good.ts` y compara con tu solución

## 🎯 Puntos clave

- Convierte una interfaz en otra
- Permite reutilizar código sin modificarlo
- Proporciona interfaz uniforme a clientes
- Patrón envoltorio para compatibilidad

## ⏱️ Verificación rápida

Pregúntate:

- ¿Necesito integrar código con interfaz diferente?
- ¿Puedo crear un envoltorio para unificar?
- ¿Es mejor adaptar que modificar?
