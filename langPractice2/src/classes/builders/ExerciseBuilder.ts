import inquirer from "inquirer";
import {
  ExerciseToAsk,
  LessonTypeString,
  RawExerciseObjects,
} from "../../../types";
import RandomisedSelector from "./RandomisedSelector";

class ExerciseBuilder {
  constructor() {}

  async build(lessonType: LessonTypeString): Promise<Promise<ExerciseToAsk>[]> {
    const characterObjects: RawExerciseObjects[] =
      await require(`${__dirname}/../../../data/${lessonType}.json`);
    const randomisedSelector = new RandomisedSelector(characterObjects);
    const selectedExercises = randomisedSelector.select(10);

    const exercises: { name: string; message: string }[] =
      selectedExercises.map(({ character, translation }) => {
        return {
          name: "answer",
          message: `What sound does this character make?\n ${character}`,
          translation,
          character,
        };
      });

    return exercises;
  }
}

export default ExerciseBuilder;
