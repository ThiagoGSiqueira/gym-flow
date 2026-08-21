import { requestUpdateExercise, requestDeleteExercise, requestGetExerciseById } from "../api/exercise-api.js"
import { setupModal } from "../component/modal.js";
import { bindSaveExercise, renderExerciseDetails, setupDeleteExerciseButton } from "../ui/exercise-ui.js"

export async function initExerciseDetailsController(exerciseId) {
    const editWorkoutModalElement = setupModal('exercise-modal', 'exercise-edit-btn', 'exercise-modal-close-btn');
    const { data: exercise } = await requestGetExerciseById(exerciseId)
    
    renderExerciseDetails(exercise)
    bindSaveExercise(editWorkoutModalElement, (update) => { handleUpdateExercise(exerciseId, exercise, update) })
    setupDeleteExerciseButton(() => { handleDeleteExercise(exerciseId) })
}

async function handleDeleteExercise(exerciseId) {
    const deleteResponse = await requestDeleteExercise(exerciseId)
    window.location.href = "index.html";
}

async function handleUpdateExercise(exerciseId, exercise, update) {


    //Pacote de atualização // Reune o que precisa ser enviado
    const payload = {
        name: update.name || exercise.name,
        muscleGroup: update.muscleGroup || exercise.muscleGroup
    }
   
    const updatedExercise = await requestUpdateExercise(exerciseId, payload)    
    await renderExerciseDetails(updatedExercise.data)
}