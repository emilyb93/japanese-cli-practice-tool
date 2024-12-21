import { ExerciseObj } from "../../types";
import { askForUserInput } from "../utils/utils";
import Exercise from "./Exercise";

class KanjiExercise extends Exercise {
    constructor(exerciseObj: ExerciseObj) {
        super(exerciseObj, "Kanji");
    }

    start() {
        return askForUserInput(this.character, this.charSet).then(({ answer }) => {
            if (answer === this.translation) {
                console.log("Correct");
                return true;
            } else {
                console.log("Incorrect: The answer was " + this.translation);
                return false;
            }
        });
    }
}

export default KanjiExercise