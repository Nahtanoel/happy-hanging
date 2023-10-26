import words from '../data/word.json';

class MotGenerator {
  static genererMot(): string {
    const mots = words.mots;
    const motAleatoire = mots[Math.floor(Math.random() * mots.length)];
    return motAleatoire;
  }
}

export default MotGenerator;

