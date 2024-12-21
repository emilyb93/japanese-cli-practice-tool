import { fetchExercises } from "../utils/fetchExercises";
import Lesson from "./Lesson";

class KatakanaLesson extends Lesson {
    constructor() {
        super();
        this.exercises = fetchExercises("Katakana");
    }
}

export default KatakanaLesson