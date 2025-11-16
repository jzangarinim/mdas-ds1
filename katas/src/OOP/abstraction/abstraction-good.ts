// Cumplimiento de Abstracción: Oculta detalles de implementación
// ✅ Solución: Interfaz simple que oculta la complejidad interna

class EmailSender {
  // ✅ Detalles internos son privados
  private smtpServer: string = "smtp.gmail.com";
  private smtpPort: number = 587;
  private username: string = "";
  private password: string = "";
  private isConnected: boolean = false;

  // ✅ Constructor simplifica la configuración
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  // ✅ Método público simple que oculta toda la complejidad
  public sendEmail(to: string, subject: string, body: string): boolean {
    try {
      // Internamente maneja todos los detalles
      this.connect();
      this.authenticate();
      const message = this.buildMessage(to, subject, body);
      this.send(message);
      this.disconnect();

      console.log(`Email enviado exitosamente a ${to}`);
      return true;
    } catch (error) {
      console.log(`Error al enviar email: ${error}`);
      return false;
    }
  }

  // ✅ Métodos privados ocultan la implementación
  private connect(): void {
    console.log(`Conectando a ${this.smtpServer}:${this.smtpPort}...`);
    this.isConnected = true;
  }

  private authenticate(): void {
    if (!this.username || !this.password) {
      throw new Error("Credenciales inválidas");
    }
    console.log(`Autenticando usuario ${this.username}...`);
  }

  private buildMessage(to: string, subject: string, body: string): string {
    return `To: ${to}\nSubject: ${subject}\n\n${body}`;
  }

  private send(message: string): void {
    if (!this.isConnected) {
      throw new Error("No conectado al servidor");
    }
    console.log("Enviando mensaje...");
  }

  private disconnect(): void {
    console.log("Desconectando del servidor...");
    this.isConnected = false;
  }
}

// ✅ Usuario solo necesita saber la interfaz pública simple
console.log("=== Cumplimiento de Abstracción ===");

const emailSender = new EmailSender("usuario@gmail.com", "password123");

// ✅ Un solo método simple - toda la complejidad está oculta
emailSender.sendEmail("destinatario@gmail.com", "Hola", "Este es el cuerpo del mensaje");

// ✅ Usuario no necesita conocer detalles internos como:
// - Conexión al servidor
// - Autenticación
// - Construcción del mensaje
// - Desconexión
// Todo está abstraído en un método simple

export { EmailSender };
