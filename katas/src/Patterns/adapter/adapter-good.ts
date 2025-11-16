// Implementación del Patrón Adapter: Interfaz unificada para clases incompatibles
// ✅ Solución: Los adaptadores hacen que interfaces incompatibles trabajen juntas

// Mismas clases de terceros (no podemos modificar estas)
class MP3Player {
  public playMP3(filename: string): string {
    return `Reproduciendo MP3: ${filename}`;
  }
}

class WAVPlayer {
  public playWAVFile(file: string): string {
    return `Reproduciendo archivo WAV: ${file}`;
  }
}

// ✅ Interfaz objetivo que nuestro reproductor multimedia espera
interface AudioPlayer {
  play(filename: string): string;
}

// ✅ Los adaptadores convierten interfaces incompatibles a nuestra interfaz objetivo
class MP3Adapter implements AudioPlayer {
  private mp3Player: MP3Player;

  constructor() {
    this.mp3Player = new MP3Player();
  }

  public play(filename: string): string {
    // ✅ El adaptador convierte la llamada a la interfaz
    return this.mp3Player.playMP3(filename);
  }
}

class WAVAdapter implements AudioPlayer {
  private wavPlayer: WAVPlayer;

  constructor() {
    this.wavPlayer = new WAVPlayer();
  }

  public play(filename: string): string {
    // ✅ El adaptador convierte la llamada a la interfaz
    return this.wavPlayer.playWAVFile(filename);
  }
}

// ✅ El código cliente trabaja con interfaz uniforme
class MediaPlayer {
  private adapters: Map<string, AudioPlayer> = new Map();

  constructor() {
    // ✅ Registrar adaptadores para diferentes formatos
    this.adapters.set("mp3", new MP3Adapter());
    this.adapters.set("wav", new WAVAdapter());
  }

  public playAudio(filename: string): string {
    const extension = filename.split(".").pop()?.toLowerCase();
    const adapter = this.adapters.get(extension || "");

    if (adapter) {
      return adapter.play(filename); // ✅ ¡El mismo método para todos los tipos!
    } else {
      return `Tipo de archivo no soportado: ${extension}`;
    }
  }
}

// ✅ Beneficios:
// 1. Interfaz uniforme para diferentes reproductores de audio
// 2. Fácil agregar nuevos formatos de audio (solo crear nuevo adaptador)
// 3. El código cliente no necesita conocer implementaciones específicas

console.log("=== Solución con Patrón Adapter ===");
const player = new MediaPlayer();
console.log(player.playAudio("cancion.mp3"));
console.log(player.playAudio("sonido.wav"));

// ✅ ¡Agregar nuevo formato es fácil - solo crear nuevo adaptador!
class FLACPlayer {
  public playFLACTrack(trackName: string): string {
    return `Reproduciendo pista FLAC: ${trackName}`;
  }
}

class FLACAdapter implements AudioPlayer {
  private flacPlayer: FLACPlayer;

  constructor() {
    this.flacPlayer = new FLACPlayer();
  }

  public play(filename: string): string {
    return this.flacPlayer.playFLACTrack(filename);
  }
}

export { AudioPlayer, MP3Player, WAVPlayer, MP3Adapter, WAVAdapter, FLACPlayer, FLACAdapter, MediaPlayer };
