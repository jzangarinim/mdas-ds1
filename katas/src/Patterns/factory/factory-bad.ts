// Violación del Patrón Factory: El código cliente crea objetos directamente con cadenas if/else
// ❌ Problema: Lógica de creación de objetos dispersa por todas partes

// Clases de notificación simples
class EmailNotification {
  public send(message: string): string {
    return `EMAIL: ${message}`;
  }
}

class SMSNotification {
  public send(message: string): string {
    return `SMS: ${message}`;
  }
}

class PushNotification {
  public send(message: string): string {
    return `PUSH: ${message}`;
  }
}

// ❌ El código cliente tiene que conocer todas las clases concretas
class NotificationService {
  public sendNotification(type: string, message: string): string {
    // ❌ Creación de objetos dispersa con cadenas if/else
    if (type === "email") {
      const notification = new EmailNotification(); // ❌ Creación directa
      return notification.send(message);
    } else if (type === "sms") {
      const notification = new SMSNotification(); // ❌ Creación directa
      return notification.send(message);
    } else if (type === "push") {
      const notification = new PushNotification(); // ❌ Creación directa
      return notification.send(message);
    } else {
      throw new Error(`Tipo de notificación desconocido: ${type}`);
    }
  }
}

// ❌ Problemas:
// 1. Cada nuevo tipo de notificación requiere modificar NotificationService
// 2. Lógica de creación de objetos duplicada en toda la aplicación
// 3. Difícil de probar - el cliente conoce todas las clases concretas

console.log("=== Violación del Patrón Factory ===");
const service = new NotificationService();
console.log(service.sendNotification("email", "Hola Mundo"));
console.log(service.sendNotification("sms", "Hola Mundo"));
console.log(service.sendNotification("push", "Hola Mundo"));

export { EmailNotification, SMSNotification, PushNotification, NotificationService };
