import { fetchExercises } from "../utils/fetchExercises";
import Lesson from "./Lesson";

class HiraganaLesson extends Lesson {

    constructor() {
        super();
        this.exercises = fetchExercises("Hiragana");
    }
}
export default HiraganaLesson