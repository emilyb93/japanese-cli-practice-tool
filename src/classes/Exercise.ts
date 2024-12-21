import { ExerciseObj } from "../../types";
import { askForUserInput } from "../utils/utils";

class Exercise {
    character: string;
    translation: string;
    charSet: string;
    revisionSet: any; // Revision
    constructor(exerciseObj: ExerciseObj, charSet: string) {
        this.character = exerciseObj.character;
        this.translation = exerciseObj.translation;
        this.charSet = charSet;
        // this.revisionSet = new Revision();
    }

    start() {
        return askForUserInput(this.character, this.charSet).then(({ answer }) => {
            if (answer === this.translation) {
                console.log("Correct");
                return true;
            } else {
                this.revisionSet.add({
                    character: this.character,
                    translation: this.translation,
                });
                console.log("Incorrect: The answer was " + this.translation);
                return false;
            }
        });
    }
}

export default Exercise