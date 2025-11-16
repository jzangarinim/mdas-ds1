// Violación de Abstracción: Expone detalles de implementación innecesarios
// ❌ Problema: El usuario debe conocer cómo funciona internamente la clase

class EmailSender {
  public smtpServer: string = "smtp.gmail.com";
  public smtpPort: number = 587;
  public username: string = "";
  public password: string = "";
  public isConnected: boolean = false;
  public connectionAttempts: number = 0;
  public lastError: string = "";

  // ❌ Usuario debe manejar todos los detalles de la conexión
  public connectToServer(): boolean {
    console.log(`Conectando a ${this.smtpServer}:${this.smtpPort}...`);
    this.connectionAttempts++;

    // Simulación de conexión
    if (this.username && this.password) {
      this.isConnected = true;
      this.lastError = "";
      return true;
    } else {
      this.lastError = "Credenciales inválidas";
      this.isConnected = false;
      return false;
    }
  }

  // ❌ Usuario debe manejar autenticación manualmente
  public authenticate(username: string, password: string): boolean {
    this.username = username;
    this.password = password;
    console.log(`Autenticando usuario ${username}...`);
    return username.length > 0 && password.length > 0;
  }

  // ❌ Usuario debe construir el mensaje manualmente
  public buildMessage(to: string, subject: string, body: string): string {
    return `To: ${to}\nSubject: ${subject}\n\n${body}`;
  }

  // ❌ Usuario debe enviar mensaje después de conectar y construir
  public sendRawMessage(message: string): boolean {
    if (!this.isConnected) {
      this.lastError = "No conectado al servidor";
      return false;
    }
    console.log(`Enviando mensaje:\n${message}`);
    return true;
  }

  // ❌ Usuario debe desconectar manualmente
  public disconnectFromServer(): void {
    console.log("Desconectando del servidor...");
    this.isConnected = false;
  }
}

// ❌ Usuario debe conocer TODOS los pasos internos
console.log("=== Violación de Abstracción ===");

const emailSender = new EmailSender();

// ❌ Muchos pasos manuales y conocimiento de detalles internos
emailSender.authenticate("usuario@gmail.com", "password123");
emailSender.connectToServer();

const message = emailSender.buildMessage("destinatario@gmail.com", "Hola", "Este es el cuerpo del mensaje");

emailSender.sendRawMessage(message);
emailSender.disconnectFromServer();

// ❌ Si algo falla, el usuario debe verificar propiedades internas
if (emailSender.lastError) {
  console.log(`Error: ${emailSender.lastError}`);
}

export { EmailSender };
