// Cumplimiento de Clean Code: Funciones Bien Diseñadas
// ✅ Solución: Una cosa por función, pequeñas, mismo nivel de abstracción, sin efectos secundarios

interface User {
  name: string;
  score: number;
}

class UserScoreProcessor {
  private static readonly FAST_TIME_BONUS = 10;
  private static readonly FAST_TIME_THRESHOLD_SECONDS = 60;

  // ✅ Función hace UNA cosa: orquestar el procesamiento del puntaje
  // ✅ Mismo nivel de abstracción
  public processUserScore(user: User, newScore: number, timeInSeconds: number): void {
    const bonus = this.calculateBonus(timeInSeconds);
    const finalScore = user.score + newScore + bonus;

    this.updateScore(user, finalScore);
    this.sendNotification(user);
    this.logActivity(user, newScore);
  }

  // ✅ Función pequeña que hace UNA cosa: calcular bonus
  private calculateBonus(timeInSeconds: number): number {
    if (timeInSeconds < UserScoreProcessor.FAST_TIME_THRESHOLD_SECONDS) {
      console.log(`Aplica bonus de ${UserScoreProcessor.FAST_TIME_BONUS} puntos por tiempo rápido.`);
      return UserScoreProcessor.FAST_TIME_BONUS;
    }
    return 0;
  }

  // ✅ Función pequeña que hace UNA cosa: actualizar puntaje
  private updateScore(user: User, finalScore: number): void {
    user.score = finalScore;
  }

  // ✅ Función pequeña que hace UNA cosa: enviar notificación
  private sendNotification(user: User): void {
    console.log(`Notificación enviada a ${user.name}: Tu nuevo puntaje es ${user.score}`);
  }

  // ✅ Función pequeña que hace UNA cosa: registrar actividad
  private logActivity(user: User, newScore: number): void {
    console.log(`LOG: ${user.name} obtuvo ${newScore} puntos. Puntaje final: ${user.score}`);
  }
}

// Uso
console.log("=== Cumplimiento de Funciones en Clean Code ===");
const user: User = { name: "Alex", score: 100 };
const processor = new UserScoreProcessor();
processor.processUserScore(user, 50, 30);
console.log("Puntaje final del usuario:", user.score);

export { UserScoreProcessor, User };
