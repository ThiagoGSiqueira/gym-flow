import { setupModal } from "../component/modal.js";
import { requestCreateExercise, requestGetAllExercises } from "../api/exercise-api.js";
import { renderList } from "../component/renderList.js";
import { bindSaveExercise } from "../ui/exercise-ui.js";
import { exerciseTemplate } from "../component/exercise-item.js";

export function initExerciseController() {
    const exerciseModalElement = setupModal('exercise-modal', 'btn-open-exercise-modal', 'modal-close-exercise-btn');
    fetchAndRenderExercises();
    bindSaveExercise(exerciseModalElement, createNewExercise)
}

async function fetchAndRenderExercises() {
    const response = await requestGetAllExercises();

    if (response.success === false) {
        alert("Não foi possível conectar-se ao servidor. Por favor, tente novamente mais tarde.");
        return;
    }

    await renderList('exercise-list', response.data, exerciseTemplate)
}

async function createNewExercise(exercise) {
    const response = await requestCreateExercise(exercise)

    fetchAndRenderExercises()
}