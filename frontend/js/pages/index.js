import { requestCreateWorkout, requestGetAllWorkouts } from "../api/workout-api.js";
import { setupModal } from "../component/modal.js";
import { renderWorkouts, saveWorkout } from "../ui/workout-ui.js";

async function fetchAndRenderWorkouts() {
    const response = await requestGetAllWorkouts();

    if (response.success === false) {
        alert("Não foi possível conectar-se ao servidor. Por favor, tente novamente mais tarde.");
        return;
    }
    await renderWorkouts(response.data);
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

    await fetchAndRenderWorkouts();
}

const workoutModalElement = setupModal('workout-modal', 'btn-open-workout-modal', 'modal-close-workout-btn');
const exerciseModalElement = setupModal('exercise-modal', 'btn-open-exercise-modal', 'modal-close-exercise-btn');

fetchAndRenderWorkouts();
saveWorkout(workoutModalElement, createNewWorkout);