// Cumplimiento del SRP: Cada clase tiene una única responsabilidad
// Solución: Clases separadas para diferentes responsabilidades

class User {
  public name: string;
  public email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  // Solo gestión de datos de usuario aquí ✅
  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }
}

// Clase separada para operaciones de email ✅
class EmailService {
  public sendWelcomeEmail(user: User): string {
    return `Enviando email de bienvenida a ${user.getEmail()}`;
  }

  public sendPasswordResetEmail(user: User): string {
    return `Enviando email de restablecimiento de contraseña a ${user.getEmail()}`;
  }
}

// Clase separada para operaciones de archivos ✅
class UserFileManager {
  public saveToFile(user: User): string {
    return `Guardando usuario ${user.getName()} en archivo`;
  }

  public loadFromFile(fileName: string): string {
    return `Cargando datos de usuario desde ${fileName}`;
  }
}

// Ejemplo de uso
const user = new User("Juan Pérez", "juan@ejemplo.com");
const emailService = new EmailService();
const fileManager = new UserFileManager();

// Cada servicio maneja su propia responsabilidad
emailService.sendWelcomeEmail(user);
fileManager.saveToFile(user);

// Beneficios:
// 1. Cada clase tiene solo una razón para cambiar
// 2. Fácil de probar responsabilidades individuales
// 3. Se pueden reutilizar servicios para diferentes tipos de usuario
// 4. El código está más organizado y es más mantenible

export { User, EmailService, UserFileManager };
