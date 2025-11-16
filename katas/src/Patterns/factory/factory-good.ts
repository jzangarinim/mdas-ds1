// Implementación del Patrón Factory: Creación centralizada de objetos
// ✅ Solución: Crear una fábrica que maneje la creación de objetos

// Interfaz común ✅
interface Notification {
  send(message: string): string;
}

// Implementaciones concretas ✅
class EmailNotification implements Notification {
  public send(message: string): string {
    return `EMAIL: ${message}`;
  }
}

class SMSNotification implements Notification {
  public send(message: string): string {
    return `SMS: ${message}`;
  }
}

class PushNotification implements Notification {
  public send(message: string): string {
    return `PUSH: ${message}`;
  }
}

// ✅ La fábrica centraliza la creación de objetos
class NotificationFactory {
  public static create(type: string): Notification {
    switch (type) {
      case "email":
        return new EmailNotification();
      case "sms":
        return new SMSNotification();
      case "push":
        return new PushNotification();
      default:
        throw new Error(`Tipo de notificación desconocido: ${type}`);
    }
  }
}

// ✅ El código cliente no conoce las clases concretas
class NotificationService {
  public sendNotification(type: string, message: string): string {
    // ✅ La fábrica maneja la creación de objetos
    const notification = NotificationFactory.create(type);
    return notification.send(message);
  }
}

// ✅ Beneficios:
// 1. Creación centralizada de objetos
// 2. Fácil agregar nuevos tipos de notificación (solo actualizar la fábrica)
// 3. El código cliente depende de la interfaz, no de clases concretas

console.log("=== Solución con Patrón Factory ===");
const service = new NotificationService();
console.log(service.sendNotification("email", "Hola Mundo"));
console.log(service.sendNotification("sms", "Hola Mundo"));
console.log(service.sendNotification("push", "Hola Mundo"));

// ¡Agregar un nuevo tipo es fácil - solo cambiar la fábrica!
class SlackNotification implements Notification {
  public send(message: string): string {
    return `SLACK: ${message}`;
  }
}

export { Notification, EmailNotification, SMSNotification, PushNotification, SlackNotification, NotificationFactory, NotificationService };
