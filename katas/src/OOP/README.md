# 🎯 Programación Orientada a Objetos (OOP)

Ejemplos prácticos de los 4 pilares fundamentales de la Programación Orientada a Objetos, diseñados para aprender en 20minutos cada uno.

## 📚 Contenido

### 1. Abstracción

**Carpeta:** `abstraction/`
**Concepto:** Ocultar detalles de implementación y exponer solo lo esencial

- ❌ **Mal ejemplo:** Exponer todos los detalles internos (conexión SMTP, autenticación, etc.)
- ✅ **Buen ejemplo:** Interfaz simple (`sendEmail()`) que oculta toda la complejidad

**Aprenderás:**

- Usar modificadores `private` para ocultar detalles
- Crear interfaces públicas simples
- Reducir complejidad para el usuario

---

### 2. Encapsulamiento

**Carpeta:** `encapsulation/`
**Concepto:** Proteger el estado interno y controlar el acceso a los datos

- ❌ **Mal ejemplo:** Propiedades públicas sin validación (balance negativo posible)
- ✅ **Buen ejemplo:** Propiedades privadas con validación en métodos públicos

**Aprenderás:**

- Proteger datos con `private` y `readonly`
- Usar getters para acceso controlado
- Implementar validaciones de negocio

---

### 3. Herencia

**Carpeta:** `inheritance/`
**Concepto:** Reutilizar código mediante relaciones padre-hijo

- ❌ **Mal ejemplo:** Código duplicado en Dog, Cat, Bird (métodos `eat()`, `sleep()` repetidos)
- ✅ **Buen ejemplo:** Clase `Animal` con código común, hijos heredan y extienden

**Aprenderás:**

- Crear clases base con comportamiento común
- Usar `extends` para heredar
- Aplicar `protected` para acceso en hijos

---

### 4. Polimorfismo

**Carpeta:** `polymorphism/`
**Concepto:** Diferentes clases responden al mismo mensaje de forma específica

- ❌ **Mal ejemplo:** Múltiples if/else para verificar tipos de animales
- ✅ **Buen ejemplo:** Clase abstracta con métodos que cada hijo implementa a su manera

**Aprenderás:**

- Eliminar condicionales con polimorfismo
- Usar clases y métodos abstractos
- Aplicar Open/Closed Principle

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
# Ejecutar un ejemplo específico
npx ts-node src/OOP/abstraction/abstraction-good.ts
npx ts-node src/OOP/encapsulation/encapsulation-good.ts
npx ts-node src/OOP/inheritance/inheritance-good.ts
npx ts-node src/OOP/polymorphism/polymorphism-good.ts
```

---

## 📋 Checklist de Aprendizaje

Marca cada concepto cuando lo domines:

- [ ] **Abstracción**: ¿Puedo ocultar detalles de implementación?
- [ ] **Encapsulamiento**: ¿Puedo proteger el estado interno con validaciones?
- [ ] **Herencia**: ¿Puedo reutilizar código mediante clases base?
- [ ] **Polimorfismo**: ¿Puedo eliminar condicionales con comportamiento polimórfico?

---

## 🎯 Puntos clave de Cada Pilar

| Pilar               | Palabra Clave          | Pregunta Clave                | Beneficio Principal |
| ------------------- | ---------------------- | ----------------------------- | ------------------- |
| **Abstracción**     | `private`              | ¿Qué debe ver el usuario?     | Simplicidad         |
| **Encapsulamiento** | `private` + validación | ¿Cómo protejo los datos?      | Seguridad           |
| **Herencia**        | `extends`              | ¿Qué código puedo reutilizar? | Reutilización       |
| **Polimorfismo**    | `abstract`             | ¿Cómo evito if/else?          | Extensibilidad      |

---

## 🔗 Relación con SOLID

- **Abstracción** → relacionado con **SRP** (responsabilidad única)
- **Encapsulamiento** → relacionado con **ISP** (segregación de interfaces)
- **Herencia** → relacionado con **LSP** (sustitución de Liskov)
- **Polimorfismo** → relacionado con **OCP** (abierto/cerrado)

---

## 📖 Orden de estudio recomendado

1. **Abstracción** - Simplificar interfaces
2. **Encapsulamiento** - Proteger datos
3. **Herencia** - Reutilizar código
4. **Polimorfismo** - Eliminar condicionales

---
