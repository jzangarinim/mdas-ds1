# 🎯 Principios SOLID

Ejemplos prácticos de los 5 principios SOLID de diseño orientado a objetos, diseñados para aprender en 20minutos cada uno.

## 📚 Contenido

### 1. SRP - Single Responsibility Principle

**Carpeta:** `srp/`  
**Concepto:** Una clase debe tener una única razón para cambiar

- ❌ **Mal ejemplo:** Clase `User` maneja datos, emails y archivos
- ✅ **Buen ejemplo:** Separado en `User`, `EmailService`, `UserFileManager`

**Aprenderás:**

- Identificar múltiples responsabilidades en una clase
- Separar preocupaciones en clases enfocadas
- Por qué cada clase debe tener solo una razón para cambiar

---

### 2. OCP - Open/Closed Principle

**Carpeta:** `ocp/`  
**Concepto:** Abierto a extensión, cerrado a modificación

- ❌ **Mal ejemplo:** Función con switch que debe modificarse para cada nuevo animal
- ✅ **Buen ejemplo:** Interfaz `Communicable` permite nuevos animales sin modificar código

**Aprenderás:**

- Extender funcionalidad sin modificar código existente
- Usar interfaces para comportamiento polimórfico
- Agregar nuevas características sin romper lo que funciona

---

### 3. LSP - Liskov Substitution Principle

**Carpeta:** `lsp/`  
**Concepto:** Los subtipos deben ser sustituibles por sus tipos base

- ❌ **Mal ejemplo:** `Square` hereda de `Rectangle` pero rompe el comportamiento esperado
- ✅ **Buen ejemplo:** Jerarquía correcta con `Shape` como base

**Aprenderás:**

- Por qué la herencia no siempre es la respuesta
- Identificar violaciones de LSP
- Diseñar jerarquías de herencia correctas

---

### 4. ISP - Interface Segregation Principle

**Carpeta:** `isp/`  
**Concepto:** Los clientes no deben depender de interfaces que no usan

- ❌ **Mal ejemplo:** Interfaz grande `Exportable` obliga a implementar métodos no usados
- ✅ **Buen ejemplo:** Interfaces específicas (`PDFExportable`, `CSVExportable`)

**Aprenderás:**

- Dividir interfaces grandes en específicas
- Evitar forzar implementaciones innecesarias
- Crear contratos claros y enfocados

---

### 5. DIP - Dependency Inversion Principle

**Carpeta:** `dip/`  
**Concepto:** Depender de abstracciones, no de implementaciones concretas

- ❌ **Mal ejemplo:** `OrderService` depende directamente de `MySQLDatabase`
- ✅ **Buen ejemplo:** `OrderService` depende de interfaz `Database`

**Aprenderás:**

- Invertir dependencias usando interfaces
- Hacer código flexible y testeable
- Cambiar implementaciones sin modificar lógica de negocio

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
npx ts-node src/SOLID/srp/srp-good.ts
npx ts-node src/SOLID/ocp/ocp-good.ts
npx ts-node src/SOLID/lsp/lsp-good.ts
npx ts-node src/SOLID/isp/isp-good.ts
npx ts-node src/SOLID/dip/dip-good.ts
```

---

## 📋 Checklist de Aprendizaje

Marca cada principio cuando lo domines:

- [ ] **SRP**: ¿Puedo identificar responsabilidades múltiples en una clase?
- [ ] **OCP**: ¿Puedo extender funcionalidad sin modificar código existente?
- [ ] **LSP**: ¿Puedo diseñar jerarquías de herencia correctas?
- [ ] **ISP**: ¿Puedo dividir interfaces grandes en específicas?
- [ ] **DIP**: ¿Puedo depender de abstracciones en vez de concretos?

---

## 🎯 Resumen de Principios

| Principio | Pregunta Clave                                         | Señal de Violación                       | Solución                           |
| --------- | ------------------------------------------------------ | ---------------------------------------- | ---------------------------------- |
| **SRP**   | ¿Cuántas razones tiene esta clase para cambiar?        | Clase con muchos métodos no relacionados | Separar en clases enfocadas        |
| **OCP**   | ¿Puedo agregar funcionalidad sin modificar código?     | Switch/if-else para tipos                | Usar interfaces y polimorfismo     |
| **LSP**   | ¿Puedo sustituir el padre por el hijo sin problemas?   | Hijo cambia comportamiento del padre     | Revisar jerarquía de herencia      |
| **ISP**   | ¿Esta interfaz obliga a implementar métodos no usados? | Métodos vacíos o que lanzan errores      | Dividir en interfaces específicas  |
| **DIP**   | ¿Dependo de abstracciones o de concretos?              | `new ConcreteClass()` en constructores   | Inyectar dependencias por interfaz |

---

## 💡 Beneficios de SOLID

### En el Desarrollo:

- ✅ **Código más mantenible** - Cambios localizados
- ✅ **Más testeable** - Fácil mockear dependencias
- ✅ **Más flexible** - Fácil extender sin romper
- ✅ **Más legible** - Clases enfocadas y claras

### En el Trabajo en Equipo:

- ✅ **Menos conflictos** - Cambios en áreas separadas
- ✅ **Mejor colaboración** - Responsabilidades claras
- ✅ **Code reviews más fáciles** - Cambios pequeños y enfocados

### En la Carrera:

- ✅ **Habilidad fundamental** - Requerida en entrevistas
- ✅ **Código profesional** - Estándar de la industria
- ✅ **Base para patrones** - Fundamento de design patterns

---

## 🔗 Relación con Otros Conceptos

### SOLID + OOP:

- **SRP** relacionado con **Abstracción** (ocultar detalles)
- **OCP** relacionado con **Polimorfismo** (comportamiento variable)
- **LSP** relacionado con **Herencia** (jerarquías correctas)
- **ISP** relacionado con **Encapsulamiento** (contratos claros)
- **DIP** relacionado con **Abstracción** (interfaces sobre concretos)

### SOLID + Patrones:

- **SRP** → Base para muchos patrones
- **OCP** → Factory, Strategy, Observer
- **LSP** → Template Method, Decorator
- **ISP** → Adapter, Facade
- **DIP** → Dependency Injection, Service Locator

---

## 📖 Orden de estudio recomendado

1. **SRP** - El más intuitivo, empieza aquí
2. **OCP** - Usa interfaces para extender
3. **DIP** - Invierte dependencias con interfaces
4. **ISP** - Interfaces específicas, no genéricas
5. **LSP** - El más sutil, déjalo para el final

---

_Ejemplos diseñados para el aprendizaje práctico_
