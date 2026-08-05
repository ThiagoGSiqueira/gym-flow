import { requestDeleteWorkout, requestGetWorkoutById, requestUpdateWorkoutName } from "../api/workout-api.js";
import { setupDeleteButton, renderWorkoutDetails, saveWorkout, setupAddExerciseModal, renderExercises } from "../ui/workout-ui.js";
import { setupModal } from "../component/modal.js";
import { requestGetAllExercises } from "../api/exercise-api.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const workoutId = urlParams.get('id');

const workoutResponse = await requestGetWorkoutById(workoutId);
renderWorkoutDetails(workoutResponse.data);

async function handleDeleteWorkout() {
    const deleteResponse = await requestDeleteWorkout(workoutId);

    if (deleteResponse.success) {
        window.location.href = "index.html";
    } else if (deleteResponse.success === 0) {
        alert("Erro de rede.");
    }
}

async function handleUpdateWorkout(workoutName) {
    const updateResponse = await requestUpdateWorkoutName(workoutId, workoutName);
    renderWorkoutDetails(updateResponse.data);
}

async function handleGetAllExercises() {
    const exercisesResponse = await requestGetAllExercises();
    renderExercises(exercisesResponse);
}

const exerciseModalElement = setupModal('exercise-modal', 'exercise-modal-add-btn', 'exercise-modal-close-btn');
const workoutModalElement = setupModal('workout-modal', 'workout-edit-btn', 'workout-modal-close-btn');

setupDeleteButton(handleDeleteWorkout);
saveWorkout(workoutModalElement, handleUpdateWorkout);
setupAddExerciseModal();
handleGetAllExercises();