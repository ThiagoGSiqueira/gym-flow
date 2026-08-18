import { requestDeleteExercise, requestGetExerciseById } from "../api/exercise-api.js"
import { renderExerciseDetails, setupDeleteExerciseButton } from "../ui/exercise-ui.js"


export async function initExerciseDetailsController(exerciseId) {
    const exercise = await requestGetExerciseById(exerciseId)
    renderExerciseDetails(exercise.data)
    setupDeleteExerciseButton(() => {handleDeleteExercise(exerciseId)})
}

async function handleDeleteExercise(exerciseId) {
    const deleteResponse = await requestDeleteExercise(exerciseId)

    if (deleteResponse.success) {
        window.location.href = "index.html";
    } else if (deleteResponse.success === 0) {
        alert("Erro de rede.");
    }
}