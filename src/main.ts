import { askForUserInput, askUserForLessonType } from "./utils/utils.ts";
import { fetchExercises } from "./utils/fetchExercises.ts";

class Game {
  lesson: Lesson;

  constructor() {}

  startGame() {
    console.clear();
    askUserForLessonType().then(({ answer }) => {
      const trackMap = {
        Hiragana: HiraganaLesson,
        Katakana: KatakanaLesson,
      };
      const track = trackMap[answer];
      this.lesson = new track();

      console.clear();
      return this.lesson.startLesson();
    });
  }
}

class Lesson {
  exercises: ExerciseArray;
  currentExerciseIndex: number;
  correctExercises: number;

  constructor() {
    this.currentExerciseIndex = 0;
  }

  startLesson() {
    const currentExercise = this.exercises[this.currentExerciseIndex];

    return currentExercise.start().then(() => {
      if (this.currentExerciseIndex === 9) {
        console.log("Well done!");
      } else {
        this.currentExerciseIndex++;
        return this.startLesson();
      }
    });
  }
}
class HiraganaLesson extends Lesson {
  constructor() {
    super();
    this.exercises = fetchExercises("Hiragana");
  }
}

class KatakanaLesson extends Lesson {
  constructor() {
    super();
    this.exercises = fetchExercises("Katakana");
  }
}
type ExerciseObj = { character: string; translation: string };

class Exercise {
  character: string;
  translation: string;
  constructor(exerciseObj: ExerciseObj) {
    this.character = exerciseObj.character;
    this.translation = exerciseObj.translation;
  }

  start() {
    return askForUserInput(this.character).then(({ answer }) => {
      if (answer === this.translation) {
        console.log("Correct");
        return true;
      } else {
        console.log("Incorrect: The answer was " + this.translation);
        return false;
      }
    });
  }
}

const game = new Game();

game.startGame();

export { Exercise };
