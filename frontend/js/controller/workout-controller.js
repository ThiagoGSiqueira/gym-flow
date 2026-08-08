import { requestCreateWorkout, requestGetAllWorkouts } from "../api/workout-api.js";
import { renderList } from "../component/renderList.js";
import { bindSaveWorkout } from "../ui/workout-ui.js"
import { setupModal } from "../component/modal.js";
import { workoutTemplate } from "../component/workout-item.js";

export function initWorkoutController() {
    const workoutModalElement = setupModal('workout-modal', 'btn-open-workout-modal', 'modal-close-workout-btn');
    fetchAndRenderWorkouts();
    bindSaveWorkout(workoutModalElement, createNewWorkout);
}

async function fetchAndRenderWorkouts() {
    const response = await requestGetAllWorkouts();

    if (response.success === false) {
        alert("Não foi possível conectar-se ao servidor. Por favor, tente novamente mais tarde.");
        return;
    }
    await renderList('workout-list', response.data, workoutTemplate);
}

async function createNewWorkout(workoutName) {
    const response = await requestCreateWorkout(workoutName);

    if (response.success === false) {
        if (response.code === 409) {
            alert(`A ficha de nome "${workoutName}" já existe.`);
            return;
        } else if (response.code === 400) {
            alert("Erro no envio. Por favor, verifique os campos.");
            return;
        }
        alert(`Erro: ${response.code}. Não foi possível conectar-se ao servidor. Por favor, tente novamente mais tarde.`);
        return;
    }
    fetchAndRenderWorkouts();
}

