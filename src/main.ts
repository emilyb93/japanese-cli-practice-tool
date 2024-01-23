import { askForUserInput, askUserForLessonType } from "./utils/utils.ts";
import { fetchHiraganaExercises } from "./utils/fetchExercises.ts";
import { start } from "repl";
class Game {
  lesson: Lesson;

  constructor() {}

  startGame() {
    askUserForLessonType().then(({ answer }) => {
      if (answer === "Hiragana") this.lesson = new HiraganaLesson();
      console.log(this.lesson)
      return this.lesson.startLesson()
    });
  }
}

class Lesson {
  exercises: ExerciseArray;
  currentExerciseIndex: number;

  constructor() {
    this.currentExerciseIndex = 0;
  }


  startLesson() {
    const currentExercise = this.exercises[this.currentExerciseIndex];
    return currentExercise.start().then(()=>{
        if(this.currentExerciseIndex === 9){
            console.log("Well done!")
        } else {

            this.currentExerciseIndex++
            return this.startLesson()
        }
    });
  }
}
class HiraganaLesson extends Lesson {
  constructor() {
    super();
    this.exercises = fetchHiraganaExercises();
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
        
      } else {
          console.log("Incorrect: The answer was " + this.translation);
       
      }
    });
  }
}

const game = new Game();

game.startGame();


export {Exercise}