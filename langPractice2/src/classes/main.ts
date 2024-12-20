import ExerciseBuilder from "./builders/ExerciseBuilder";
import ExerciseEngine from "./builders/ExerciseEngine";

class Main {
  constructor() {}

  async start() {
    console.clear();
    const exerciseBuilder = new ExerciseBuilder();
    const exercises = await exerciseBuilder.build("hiragana");
    const exerciseEngine = new ExerciseEngine(exercises);
    exerciseEngine.ask();
  }
}

const main = new Main();

main.start();
