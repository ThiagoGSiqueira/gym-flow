import { setupDeleteButton, renderWorkoutDetails, bindSaveWorkout, setupAddExerciseModal, renderWorkoutExercises } from "../ui/workout-ui.js";
import { requestDeleteWorkout, requestGetWorkoutById, requestUpdateWorkoutName } from "../api/workout-api.js";
import { requestGetAllExercises } from "../api/exercise-api.js";
import { setupModal } from "../component/modal.js";

export async function initWorkoutDetailsController(workoutId) {
    const exerciseModalElement = setupModal('exercise-modal', 'exercise-modal-add-btn', 'exercise-modal-close-btn');
    const editWorkoutModalElement = setupModal('workout-modal', 'workout-edit-btn', 'workout-modal-close-btn');

    const workoutResponse = await requestGetWorkoutById(workoutId);
    renderWorkoutDetails(workoutResponse.data);

    setupDeleteButton(() => {handleDeleteWorkout(workoutId)});
    bindSaveWorkout(editWorkoutModalElement, (workoutName) => {handleUpdateWorkout(workoutId, workoutName)});
    setupAddExerciseModal();
    handleGetAllExercises();
}

async function handleDeleteWorkout(workoutId) {
    const deleteResponse = await requestDeleteWorkout(workoutId);

    if (deleteResponse.success) {
        window.location.href = "index.html";
    } else if (deleteResponse.success === 0) {
        alert("Erro de rede.");
    }
}

async function handleUpdateWorkout(workoutId, workoutName) {
    const updateResponse = await requestUpdateWorkoutName(workoutId, workoutName);
    renderWorkoutDetails(updateResponse.data);
}

async function handleGetAllExercises() {
    const exercisesResponse = await requestGetAllExercises();
    renderWorkoutExercises(exercisesResponse);
}

