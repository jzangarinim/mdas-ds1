# 🏗️ Patrones de Diseño (Design Patterns)

Ejemplos prácticos de patrones de diseño comunes, diseñados para aprender en 20minutos cada uno.

## 📚 Contenido

### 1. Factory - Patrón creacional

**Carpeta:** `factory/`
**Problema:** Lógica de creación de objetos dispersa por toda la aplicación

- ❌ **Mal ejemplo:** Creación de objetos con if/else en múltiples lugares
- ✅ **Buen ejemplo:** `NotificationFactory` centraliza la creación

**Aprenderás:**

- Centralizar la creación de objetos
- Usar interfaces para flexibilidad
- Agregar nuevos tipos sin modificar clientes

**Cuándo usar:**

- Muchas clases relacionadas a crear
- Lógica de creación compleja
- Necesitas cambiar implementaciones fácilmente

---

### 2. Builder - Patrón creacional

**Carpeta:** `builder/`
**Problema:** Constructores con demasiados parámetros (telescoping constructor)

- ❌ **Mal ejemplo:** Constructor de Pizza con 10+ parámetros
- ✅ **Buen ejemplo:** `PizzaBuilder` con interfaz fluida paso a paso

**Aprenderás:**

- Construir objetos complejos paso a paso
- Interfaz fluida (fluent interface)
- Crear diferentes representaciones del mismo objeto

**Cuándo usar:**

- Objetos con muchos parámetros opcionales
- Necesitas diferentes configuraciones
- Quieres hacer la construcción más legible

---

### 3. Adapter - Patrón estructural

**Carpeta:** `adapter/`
**Problema:** Interfaces incompatibles entre sistemas

- ❌ **Mal ejemplo:** Código cliente maneja múltiples interfaces diferentes
- ✅ **Buen ejemplo:** Adaptadores proporcionan interfaz unificada

**Aprenderás:**

- Hacer que interfaces incompatibles trabajen juntas
- Envolver código legacy o de terceros
- Proporcionar una interfaz consistente

**Cuándo usar:**

- Integrar código legacy
- Usar librerías de terceros con interfaces diferentes
- Necesitas una interfaz uniforme

---

### 4. Strategy - Patrón de comportamiento

**Carpeta:** `strategy/`
**Problema:** Múltiples algoritmos con lógica condicional repetida

- ❌ **Mal ejemplo:** Clase con switch/case para diferentes descuentos
- ✅ **Buen ejemplo:** Estrategias intercambiables para cada tipo de descuento

**Aprenderás:**

- Encapsular algoritmos en clases separadas
- Hacer algoritmos intercambiables
- Eliminar condicionales complejos

**Cuándo usar:**

- Múltiples variantes de un algoritmo
- Necesitas cambiar comportamiento en runtime
- Tienes muchos if/else o switch/case

---

## 🚀 Cómo usar este material

### 1. Lee el README

Cada carpeta tiene un `README.md` con:

- 🎯 Objetivos de aprendizaje
- 📋 Explicación del problema
- 🔧 Tarea práctica
- 🎯 Puntos clave
- ⏱️ Verificación rápida

### 2. Analiza el mal ejemplo

Abre el archivo `*-bad.ts` y:

- Identifica qué está mal
- Piensa en cómo mejorarlo
- Nota los comentarios `❌`

### 3. Implementa tu solución

- Aplica lo aprendido al código código
- Revisa código existente con estos principios

### 4. Estudia la solución

Abre el archivo `*-good.ts` y:

- Compara con el mal ejemplo
- Compara con tu solución
- Entiende las diferencias
- Nota los comentarios `✅`

---

### Ejecutar los Ejemplos

```bash
# Instalar dependencias
npm install

# Ejecutar todos los tests
npm test

# Ejecutar un ejemplo específico
npx ts-node src/Patterns/factory/factory-good.ts
npx ts-node src/Patterns/builder/builder-good.ts
npx ts-node src/Patterns/adapter/adapter-good.ts
npx ts-node src/Patterns/strategy/strategy-good.ts
```

---

## 📋 Checklist de Aprendizaje

Marca cada patrón cuando lo domines:

- [ ] **Factory**: ¿Puedo centralizar la creación de objetos?
- [ ] **Builder**: ¿Puedo construir objetos complejos paso a paso?
- [ ] **Adapter**: ¿Puedo unificar interfaces incompatibles?
- [ ] **Strategy**: ¿Puedo hacer algoritmos intercambiables?

---

## 🎯 Clasificación de Patrones

### 🔷 Patrones Creacionales (Cómo crear objetos)

**Factory** y **Builder**

- Se enfocan en el proceso de creación de objetos
- Hacen el código más flexible sobre qué objetos crear
- Encapsulan el conocimiento sobre qué clases concretas usar

### 🔶 Patrones Estructurales (Cómo componer objetos)

**Adapter**

- Se enfocan en cómo las clases y objetos se componen
- Ayudan a formar estructuras más grandes
- Facilitan el diseño al identificar maneras simples de realizar relaciones

### 🔴 Patrones de Comportamiento (Cómo interactúan objetos)

**Strategy**

- Se enfocan en la comunicación entre objetos
- Caracterizan flujos de control complejos
- Distribuyen responsabilidad entre objetos

---

## 🎨 Resumen Visual de Patrones

| Patrón       | Problema                 | Solución                   | Ejemplo Real              |
| ------------ | ------------------------ | -------------------------- | ------------------------- |
| **Factory**  | Creación dispersa        | Fábrica centralizada       | Sistema de notificaciones |
| **Builder**  | Muchos parámetros        | Construcción paso a paso   | Configurador de producto  |
| **Adapter**  | Interfaces incompatibles | Envoltorio unificador      | Integración de APIs       |
| **Strategy** | Muchos if/else           | Algoritmos intercambiables | Sistema de descuentos     |

---

## 💡 Cuándo Usar Cada Patrón

### 🤔 Señales de que Necesitas Factory

```typescript
// ❌ Señal de alerta
function sendNotification(type: string) {
  if (type === "email") return new EmailNotification();
  if (type === "sms") return new SMSNotification();
  // ... más if/else por todos lados
}

// ✅ Usa Factory
const notification = NotificationFactory.create(type);
```

### 🤔 Señales de que Necesitas Builder

```typescript
// ❌ Señal de alerta
new Pizza("grande", "delgada", "tomate", "mozzarella", ["pepperoni", "champiñones"], false, true, 2); // ¿Qué significa cada parámetro?

// ✅ Usa Builder
new PizzaBuilder().setSize("grande").addTopping("pepperoni").setSpicy(2).build();
```

### 🤔 Señales de que Necesitas Adapter

```typescript
// ❌ Señal de alerta
if (file.endsWith(".mp3")) mp3Player.playMP3(file);
else if (file.endsWith(".wav")) wavPlayer.playWAV(file);
// Diferentes interfaces para cada formato

// ✅ Usa Adapter
const player: MediaPlayer = getAdapter(file);
player.play(file); // Interfaz unificada
```

### 🤔 Señales de que Necesitas Strategy

```typescript
// ❌ Señal de alerta
function calculateDiscount(customerType: string, amount: number) {
  if (customerType === "regular") return 0;
  else if (customerType === "premium") return amount * 0.1;
  else if (customerType === "vip") return amount * 0.2;
  // Lógica condicional compleja
}

// ✅ Usa Strategy
const strategy = DiscountFactory.getStrategy(customerType);
return strategy.calculate(amount);
```

---

## 🔗 Relación con SOLID

Los patrones de diseño implementan los principios SOLID:

| Patrón       | Principios SOLID que Aplica                                      |
| ------------ | ---------------------------------------------------------------- |
| **Factory**  | OCP (Abierto/Cerrado), DIP (Inversión de Dependencias)           |
| **Builder**  | SRP (Responsabilidad Única), ISP (Segregación de Interfaces)     |
| **Adapter**  | ISP (Segregación de Interfaces), DIP (Inversión de Dependencias) |
| **Strategy** | OCP (Abierto/Cerrado), SRP (Responsabilidad Única)               |

---

## 📖 Orden de estudio recomendado

1. **Factory** - El más intuitivo, empieza aquí
2. **Strategy** - Fácil de entender y muy útil
3. **Builder** - Útil para constructores complejos
4. **Adapter** - Importante para integraciones

---
