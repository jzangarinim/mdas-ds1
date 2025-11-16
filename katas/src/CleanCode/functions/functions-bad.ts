// Violación de Clean Code: Funciones Mal Diseñadas
// ❌ Problemas: Hacen muchas cosas, grandes, niveles de abstracción mezclados, efectos secundarios

class UserScoreProcessor {
  // ❌ Función hace MUCHAS cosas: calcula bonus, actualiza score, envía notificación y loguea
  // ❌ Niveles de abstracción mezclados
  public processUserScore(user: { name: string; score: number }, newScore: number, timeInSeconds: number): void {
    console.log(`Procesando puntaje para ${user.name}...`);

    // Nivel bajo: cálculo de bonus
    let bonus = 0;
    if (timeInSeconds < 60) {
      bonus = 10;
      console.log(`Aplica bonus de ${bonus} puntos por tiempo rápido.`);
    }

    const finalScore = user.score + newScore + bonus;

    // Nivel medio: actualizar el score del usuario (efecto secundario)
    user.score = finalScore;

    // Nivel bajo: enviar notificación
    console.log(`Notificación enviada a ${user.name}: Tu nuevo puntaje es ${finalScore}`);

    // Nivel bajo: guardar en log
    console.log(`LOG: ${user.name} obtuvo ${newScore} puntos. Puntaje final: ${finalScore}`);
  }
}

// Uso
console.log("=== Violación de Funciones en Clean Code ===");
const user = { name: "Alex", score: 100 };
const processor = new UserScoreProcessor();
processor.processUserScore(user, 50, 30);
console.log("Puntaje final del usuario:", user.score);

export { UserScoreProcessor };
