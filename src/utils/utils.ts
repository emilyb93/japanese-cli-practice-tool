import inquirer from "inquirer";

function askUserForLessonType(): Promise<{ answer: string }> {
  return inquirer.prompt({
    type: "list",
    name: "answer",
    message: "Hi there, what kind of revision are you looking to do today?",
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

function askForUserInput(questionText: string): Promise<{ answer: string }> {
  return inquirer.prompt({ name: "answer", message: questionText });
}

export { askForUserInput, askForUserSelection, askUserForLessonType };
