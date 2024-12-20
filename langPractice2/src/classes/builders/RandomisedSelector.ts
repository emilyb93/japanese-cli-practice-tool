import { RawExerciseObjects } from "../../../types";

class RandomisedSelector {
  exercises: RawExerciseObjects[];
  constructor(exercises: RawExerciseObjects[]) {
    this.exercises = exercises;
  }

  select(amount: number) {
    const randomIndexes: number[] = [];

    // Get random exercises
    for (let i = 0; i < amount; i++) {
      // Get a unique exercise index
      const randomIndex: number = Math.floor(
        Math.random() * this.exercises.length
      );

      if (randomIndexes.includes(randomIndex)) {
        i--;
        continue;
      } else {
        randomIndexes.push(randomIndex);
      }
    }

    const selectedExercises: RawExerciseObjects[] = randomIndexes.map(
      (i) => this.exercises[i]
    );
    return selectedExercises;
  }
}

export default RandomisedSelector;
