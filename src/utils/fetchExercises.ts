import hiraganaExercises from "../data/hiragana.json";
import katakanaExercises from "../data/katakana.json";
import kanjiExercises from "../data/kanji.json";

import { Exercise, KanjiExercise } from "../main.ts";

const charSetMap = {
  Katakana: katakanaExercises,
  Hiragana: hiraganaExercises,
  Kanji: kanjiExercises,
};

function fetchExercises(charSet) {
  const randomIndexes: number[] = [];
  const charSetExercises = charSetMap[charSet];
  for (let i = 0; i < 10; i++) {
    const randomIndex: number = Math.floor(
      Math.random() * charSetExercises.length
    );
    if (randomIndexes.includes(randomIndex)) {
      i--;
    } else {
      randomIndexes.push(randomIndex);
    }
  }
  // console.log({ randomIndexes });
  return randomIndexes.map(
    (index) => new Exercise(charSetExercises[index], charSet)
  );
}

function fetchKanjiExercises() {
  const randomIndexes: number[] = [];
  const incorrectIndexes: [number, number, number][] = [];
  const charSetExercises = charSetMap["Kanji"];

  // Get a random exercise, pick 3 other incorrect answers for multi-choice questions
  for (let i = 0; i < 10; i++) {
    // Get a unique exercise index
    const randomIndex: number = Math.floor(
      Math.random() * charSetExercises.length
    );
    if (randomIndexes.includes(randomIndex)) {
      i--;
    } else {
      randomIndexes.push(randomIndex);
    }
    //

    // Get 3 random incorrect indexes in an array that are all unique
    const randomIncorrectIndexes: [number, number, number] = [0, 0, 0].map(
      (num) => {
        let randomIncorrectIndex: number = Math.floor(
          Math.random() * charSetExercises.length
        );

        while (randomIncorrectIndex === randomIndex) {
          randomIncorrectIndex = Math.floor(
            Math.random() * charSetExercises.length
          );
        }

        return randomIncorrectIndex;
      }
    );
    // console.log({ randomIncorrectIndexes });
    // Push those to an array in the same position, might be better to just rework this into the returned exercise object on a property

    incorrectIndexes.push(randomIncorrectIndexes);

    //
  }
  // console.log({ randomIndexes });

  return randomIndexes.map(
    (index) => new KanjiExercise(charSetExercises[index])
  );
}

export { fetchExercises, fetchKanjiExercises };
