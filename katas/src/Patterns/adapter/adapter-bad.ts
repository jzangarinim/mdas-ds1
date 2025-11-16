// Violación del Patrón Adapter: Interfaces incompatibles fuerzan llamadas a métodos diferentes
// ❌ Problema: Clases de terceros tienen interfaces diferentes

// Reproductor de audio de terceros (no podemos modificar esto)
class MP3Player {
  public playMP3(filename: string): string {
    return `Reproduciendo MP3: ${filename}`;
  }
}

// Otro reproductor de audio de terceros (tampoco podemos modificar esto)
class WAVPlayer {
  public playWAVFile(file: string): string {
    return `Reproduciendo archivo WAV: ${file}`;
  }
}

// ❌ Nuestro reproductor multimedia debe manejar cada tipo de forma diferente
class MediaPlayer {
  public playAudio(fileType: string, filename: string): string {
    if (fileType === "mp3") {
      const mp3Player = new MP3Player();
      return mp3Player.playMP3(filename); // ❌ Nombre de método diferente
    } else if (fileType === "wav") {
      const wavPlayer = new WAVPlayer();
      return wavPlayer.playWAVFile(filename); // ❌ Nombre de método diferente
    } else {
      return `Tipo de archivo no soportado: ${fileType}`;
    }
  }
}

// ❌ Problemas:
// 1. Debe recordar nombres de métodos diferentes para cada reproductor
// 2. Código cliente acoplado a implementaciones específicas
// 3. Agregar nuevo formato de audio requiere modificar MediaPlayer

console.log("=== Violación del Patrón Adapter ===");
const player = new MediaPlayer();
console.log(player.playAudio("mp3", "cancion.mp3"));
console.log(player.playAudio("wav", "sonido.wav"));

export { MP3Player, WAVPlayer, MediaPlayer };
