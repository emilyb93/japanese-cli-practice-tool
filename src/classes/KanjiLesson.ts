import { fetchKanjiExercises } from "../utils/fetchExercises";
import Lesson from "./Lesson";

class KanjiLesson extends Lesson {
    constructor() {
        super();
        this.exercises = fetchKanjiExercises();
    }
}

export default KanjiLesson