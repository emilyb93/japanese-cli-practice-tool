import { ExerciseArray } from "../../types";

class Lesson {
    exercises: ExerciseArray;
    currentExerciseIndex: number;
    correctExercises: number;

    constructor() {
        this.currentExerciseIndex = 0;
    }

    startLesson() {
        const currentExercise = this.exercises[this.currentExerciseIndex];

        return currentExercise.start().then(() => {
            if (this.currentExerciseIndex === 9) {
                console.log("Well done!");
            } else {
                this.currentExerciseIndex++;
                return this.startLesson();
            }
        });
    }
}

export default Lesson