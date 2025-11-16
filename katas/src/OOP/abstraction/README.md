# OOP: Abstracción - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender qué es la abstracción en OOP
- Aprender a ocultar detalles de implementación
- Usar modificadores de acceso (public/private) correctamente
- Crear interfaces simples para funcionalidad compleja

## 📋 El problema: Exponer detalles innecesarios

**Concepto:** _La abstracción oculta los detalles complejos y muestra solo lo esencial_

### ¿Qué está mal aquí? 🚫

```typescript
const emailSender = new EmailSender();

// ❌ Usuario debe conocer todos los pasos internos
emailSender.authenticate("user@email.com", "pass");
emailSender.connectToServer();
const message = emailSender.buildMessage("to@email.com", "Hi", "Body");
emailSender.sendRawMessage(message);
emailSender.disconnectFromServer();

// ❌ Usuario tiene acceso a detalles internos
emailSender.smtpServer = "otro-servidor.com"; // ¿Debería poder hacer esto?
emailSender.isConnected = false; // ¿Y esto?
```

**Problemas:**

- **Demasiada exposición**: Usuario ve todos los detalles internos
- **Complejidad**: Usuario debe conocer 5+ pasos para enviar un email
- **Propenso a errores**: Fácil olvidar pasos u orden incorrecto
- **Difícil mantenimiento**: Cambios internos afectan a todos los usuarios

## 🔧 Tu tarea

1. **Estudia** `abstraction-bad.ts` - identifica detalles innecesariamente expuestos
2. **Implementa** tu solución en `abstraction-exercise.ts` antes de ver la propuesta
3. **Observa** `abstraction-good.ts` y compara con tu solución

## 🎯 Puntos clave

- Oculta complejidad con `private`
- Interfaz pública simple y clara
- Usuario no necesita saber cómo funciona
- Menos pasos = menos errores

## ⏱️ Verificación rápida

Pregúntate:

- ¿Cuántos pasos debe hacer el usuario?
- ¿Qué detalles son innecesarios exponer?
- ¿Puedo simplificar la interfaz pública?
