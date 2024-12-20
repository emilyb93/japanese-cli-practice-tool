import { askForUserInput, askUserForLessonType } from "./utils/utils.ts";
import { fetchExercises, fetchKanjiExercises } from "./utils/fetchExercises.ts";
import inquirer from "inquirer";
import Revision from "./revision.ts";
class Game {
  lesson: Lesson;

  constructor() {}

  startGame() {
    console.clear();
    askUserForLessonType().then(({ answer }) => {
      const trackMap = {
        Hiragana: HiraganaLesson,
        Katakana: KatakanaLesson,
        Kanji: KanjiLesson,
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

class KanjiLesson extends Lesson {
  constructor() {
    super();
    this.exercises = fetchKanjiExercises();
  }
}
type ExerciseObj = { character: string; translation: string };

class Exercise {
  character: string;
  translation: string;
  charSet: string;
  revisionSet: Revision;
  constructor(exerciseObj: ExerciseObj, charSet: string) {
    this.character = exerciseObj.character;
    this.translation = exerciseObj.translation;
    this.charSet = charSet;
    this.revisionSet = new Revision();
  }

  start() {
    return askForUserInput(this.character, this.charSet).then(({ answer }) => {
      if (answer === this.translation) {
        console.log("Correct");
        return true;
      } else {
        this.revisionSet.add({
          character: this.character,
          translation: this.translation,
        });
        console.log("Incorrect: The answer was " + this.translation);
        return false;
      }
    });
  }
}

class KanjiExercise extends Exercise {
  constructor(exerciseObj: ExerciseObj) {
    super(exerciseObj, "Kanji");
  }

  start() {
    return askForUserInput(this.character, this.charSet).then(({ answer }) => {
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

export { Exercise, KanjiExercise };
