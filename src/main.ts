type ExerciseArray = Exercise[]

class Lesson {
    exercises: ExerciseArray
    currentExerciseIndex: number
    constructor(exercises :ExerciseArray){
        this.exercises = exercises
        this.currentExerciseIndex = 0

    }

    askLessonType(){
        askUserForLessonType()
    }

    startLesson(){
        const currentExercise = this.exercises[this.currentExerciseIndex]
        currentExercise.start()        
    }
}

class Exercise {

    constructor({character, translation}){

    }

    start(){}
}