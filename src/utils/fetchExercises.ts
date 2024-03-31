import hiraganaExercises from "../data/hiragana.json";
import katakanaExercises from "../data/katakana.json";
import { Exercise } from "../main.ts";

const charSetMap = {
  Katakana: katakanaExercises,
  Hiragana: hiraganaExercises,
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
  console.log({ randomIndexes });
  return randomIndexes.map((index) => new Exercise(charSetExercises[index]));
}
// function fetchHiraganaExercises() {
//   const randomIndexes: number[] = [];
//   for (let i = 0; i < 10; i++) {
//     const randomIndex: number = Math.floor(
//       Math.random() * hiraganaExercises.length
//     );
//     if (randomIndexes.includes(randomIndex)) {
//       i--;
//     } else {
//       randomIndexes.push(randomIndex);
//     }
//   }
//   console.log({ randomIndexes });
//   return randomIndexes.map((index) => new Exercise(hiraganaExercises[index]));
// }

export { fetchExercises };
