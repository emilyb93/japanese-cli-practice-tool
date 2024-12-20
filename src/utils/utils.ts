import inquirer from "inquirer";

function askUserForLessonType(): Promise<{ answer: string }> {
  return inquirer.prompt({
    type: "list",
    name: "answer",
    message:
      "Hi there, what kind of revision are you looking to do today? \n We will ask you 10 questions from your selected topic:",
    choices: ["Hiragana", "Katakana", "Kanji"],
  });
}

function askForUserSelection(
  questionText: string,
  answers: string[]
): Promise<{ answer: string }> {
  return inquirer.prompt({
    type: "list",
    name: "answer",
    message: questionText,
    choices: answers,
  });
}

function askForUserInput(
  questionText: string,
  lessonType: string
): Promise<{ answer: string }> {
  if (lessonType === "Kanji")
    return inquirer.prompt({
      name: "answer",
      message: `What does this Kanji mean?\n ${questionText}`,
    });
  return inquirer.prompt({
    name: "answer",
    message: `What sound does this character make?\n ${questionText}`,
  });
}

export { askForUserInput, askForUserSelection, askUserForLessonType };
