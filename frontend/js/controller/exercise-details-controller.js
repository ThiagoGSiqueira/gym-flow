import { requestGetExerciseById } from "../api/exercise-api.js"
import { renderExerciseDetails } from "../ui/exercise-ui.js"


export async function initExerciseDetailsController (exerciseId) {
    const exercise = await requestGetExerciseById(exerciseId)
    
    console.log(exercise.data)
    
    renderExerciseDetails(exercise.data)
}