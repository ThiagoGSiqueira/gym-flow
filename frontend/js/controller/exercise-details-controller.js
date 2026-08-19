import { requestUpdateExercise, requestDeleteExercise, requestGetExerciseById } from "../api/exercise-api.js"
import { setupModal } from "../component/modal.js";
import { bindSaveExercise, renderExerciseDetails, setupDeleteExerciseButton } from "../ui/exercise-ui.js"



export async function initExerciseDetailsController(exerciseId) {
    const editWorkoutModalElement = setupModal('exercise-modal', 'exercise-edit-btn', 'exercise-modal-close-btn');
    const exercise = await requestGetExerciseById(exerciseId)
    renderExerciseDetails(exercise.data)
    bindSaveExercise(editWorkoutModalElement, (exercise) => { handleUpdateExercise(exerciseId, exercise) })
    setupDeleteExerciseButton(() => { handleDeleteExercise(exerciseId) })
}

async function handleDeleteExercise(exerciseId) {
    const deleteResponse = await requestDeleteExercise(exerciseId)
    window.location.href = "index.html";
}

async function handleUpdateExercise(exerciseId, exercise) {
    const updatedExercise = await requestUpdateExercise(exerciseId, exercise)

    await renderExerciseDetails(updatedExercise.data)
}