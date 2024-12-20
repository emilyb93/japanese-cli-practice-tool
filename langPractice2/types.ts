export type LessonTypeString = "hiragana" | "kanji" | "katakana" | "revision";
export type RawExerciseObjects = { character: string; translation: string };
export type ExerciseToAsk = {
  name: string;
  message: string;
  translation: string;
  character: string;
};
export type IncorrectExercise = { character: string; translation: string };
