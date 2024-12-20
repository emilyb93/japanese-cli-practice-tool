import { RawExerciseObjects } from "../../../types";
import inquirer from "inquirer";
import type { ExerciseToAsk, IncorrectExercise } from "../../../types";
import { writeFile } from "fs/promises";

type ExerciseToCheck = {
  answer: string;
  translation: string;
  message: string;
  name: string;
  character: string;
};

class ExerciseEngine {
  exercises: ExerciseToAsk[];
  index: number;
  correctExercisesCount: number;
  incorrectExerciseCount: number;
  incorrectExercises: RawExerciseObjects[];

  constructor(exercises: ExerciseToAsk[]) {
    this.exercises = exercises;
    this.index = 0;
    this.correctExercisesCount = 0;
    this.incorrectExerciseCount = 0;
    this.incorrectExercises = [];
  }

  ask() {
    const exercise = this.exercises[this.index];
    const { name, message, translation, character } = exercise;
    return inquirer
      .prompt({ name, message })
      .then(({ answer }) => {
        this.checkAnswer({ ...exercise, answer });
      })
      .then(() => {
        if (this.index < this.exercises.length - 1) {
          return setTimeout(() => {
            console.clear();
            this.index++;
            this.ask();
          }, 500);
        } else {
          console.clear();
          console.log(
            `Summary:\n Correct: ${this.correctExercisesCount}\n Incorrect: ${
              this.incorrectExerciseCount
            }\n ${JSON.stringify(this.incorrectExercises, null, 2)} `
          );
          this.writeIncorrectToFile();
        }
      });
  }

  checkAnswer(exercise: ExerciseToCheck) {
    const { translation, answer, character } = exercise;
    if (answer === translation) {
      this.correctExercisesCount++;
      console.log("Correct!");
    } else {
      this.incorrectExerciseCount++;
      this.logIncorrect({ character, translation });
      console.log("Incorrect: This character is " + translation);
    }
  }

  logIncorrect(exercise: IncorrectExercise) {
    const { character, translation } = exercise;
    this.incorrectExercises.push({ character, translation });
  }

  async writeIncorrectToFile() {
    const revisionPath = `${__dirname}/../../../data/revision.json`;
    const revision = await require(revisionPath);
    revision.push(...this.incorrectExercises);
    await writeFile(revisionPath, JSON.stringify(revision, null, 2)).then(
      () => {
        console.log("stored");
      }
    );
  }
}

export default ExerciseEngine;
