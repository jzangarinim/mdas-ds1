# 🎓 Clean Code, OOP, Principios SOLID y Patrones de Diseño en TypeScript

Este proyecto presenta ejemplos prácticos de Clean Code, OOP, Principios SOLID y Patrones de Diseño usando TypeScript. Cada concepto incluye ejemplos "malos" (violando principios) y "buenos" (siguiendo buenas prácticas) para facilitar el aprendizaje.
---

## 📚 Contenido del proyecto

### ✨ 1. Clean Code (`src/CleanCode/`)

Principios de código limpio y legible:

- **Naming** - Nombrado descriptivo (sin magic numbers, encodings)
- **Functions** - Funciones pequeñas y enfocadas (una responsabilidad)
- **Format** - Formato horizontal y vertical consistente

### 🎯 2. Programación Orientada a Objetos (`src/OOP/`)

Los 4 pilares fundamentales de OOP:

- **Abstraction** - Abstracción (ocultar detalles de implementación)
- **Encapsulation** - Encapsulamiento (proteger el estado interno)
- **Inheritance** - Herencia (reutilización de código)
- **Polymorphism** - Polimorfismo (comportamiento específico sin condicionales)

### 🔷 3. Principios SOLID (`src/SOLID/`)

Los 5 principios fundamentales de diseño orientado a objetos:

- **S** - Single Responsibility Principle (SRP) - Responsabilidad Única
- **O** - Open/Closed Principle (OCP) - Abierto/Cerrado
- **L** - Liskov Substitution Principle (LSP) - Sustitución de Liskov
- **I** - Interface Segregation Principle (ISP) - Segregación de Interfaces
- **D** - Dependency Inversion Principle (DIP) - Inversión de Dependencias

### 🏗️ 4. Patrones de Diseño (`src/Patterns/`)

Soluciones probadas para problemas comunes de diseño:

- **Factory** - Patrón creacional para creación de objetos
- **Builder** - Patrón creacional para construcción compleja (Pizza)
- **Adapter** - Patrón estructural para compatibilidad de interfaces
- **Strategy** - Patrón de comportamiento para selección de algoritmos

## 🚀 Preparativos

### Prerequisitos

- Node.js (v16 o mayor)
- npm or yarn

### Instalación

```bash
# Install dependencies
npm install

# Run tests
npm run test

```

## 🎯 Formato de aprendizaje (20 minutos por concepto)

Cada carpeta incluye:

1. **README.md** - Guía de aprendizaje
2. **ejemplo-bad.ts** - Código que viola el principio
3. **ejemplo-exercise.ts** - Archivo para tu práctica
4. **ejemplo-good.ts** - Código que sigue el principio

### Cómo estudiar

1. Lee el README del concepto
2. Ejecuta y analiza el ejemplo malo
> npx ts-node src/OOP/abstraction/abstraction-bad.ts
3. Aplica los técnicas y principios aprendidos para refactoizar el ejemplo malo
4. Ejecuta tu solución
> npx ts-node src/OOP/abstraction/abstraction-exercise.ts
5. Ejecuta y estudia el ejemplo bueno
> npx ts-node src/OOP/abstraction/abstraction-good.ts

---

## 🔍 Beneficios demostrados

### ✅ Clean Code:

- **Legibilidad**: Código fácil de entender
- **Menos Bugs**: Nombres claros reducen errores
- **Colaboración**: Otros desarrolladores entienden rápidamente
- **Mantenimiento**: Cambios futuros más simples

### ✅ OOP:

- **Abstracción**: Interfaces simples, complejidad oculta
- **Encapsulamiento**: Datos protegidos y validados
- **Herencia**: Código compartido, menos duplicación
- **Polimorfismo**: Extensible sin modificar código existente

### ✅ SOLID:

- **Mantenibilidad**: Fácil de modificar y extender
- **Testabilidad**: Clases pueden probarse aisladamente
- **Flexibilidad**: Código se adapta a cambios
- **Legibilidad**: Separación clara de responsabilidades
- **Reutilización**: Componentes reutilizables

### ✅ Patrones de Diseño:

- **Reutilización**: Soluciones probadas a problemas comunes
- **Comunicación**: Vocabulario compartido entre desarrolladores
- **Mejores Prácticas**: Enfoques probados en el tiempo
- **Flexibilidad**: Modificar comportamiento sin cambiar estructura
- **Mantenibilidad**: Código bien organizado y predecible
