import hiraganaExercises from "../data/hiragana.json";
import {Exercise} from "../main.ts"

function fetchHiraganaExercises() {
  const randomIndexes: number[] = [];
  for (let i = 0; i < 10; i++) {
    const randomIndex: number = Math.floor(
      Math.random() * hiraganaExercises.length
    );
    if (randomIndexes.includes(randomIndex)) {
      i--;
    } else {
      randomIndexes.push(randomIndex);
    }
  }
  console.log({randomIndexes})
  return randomIndexes.map((index) => new Exercise(hiraganaExercises[index]));
}

export {fetchHiraganaExercises}