import { askUserForLessonType } from "../utils/utils";
import HiraganaLesson from "./HiraganaLesson";
import KanjiLesson from "./KanjiLesson";
import KatakanaLesson from "./KatakanaLesson";
import Lesson from "./Lesson";

class Game {
    lesson: Lesson;

    constructor() { }

    startGame() {
        console.clear();
        askUserForLessonType().then(({ answer }) => {
            const trackMap = {
                Hiragana: HiraganaLesson,
                Katakana: KatakanaLesson,
                Kanji: KanjiLesson,
            };
            const track = trackMap[answer];
            this.lesson = new track();

            console.clear();
            return this.lesson.startLesson();
        });
    }
}

export default Game