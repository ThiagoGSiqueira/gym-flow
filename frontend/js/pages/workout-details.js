import { requestDeleteWorkout, requestGetWorkoutById, requestUpdateWorkoutName } from "../api/workout-api.js";
import { setupDeleteButton, renderWorkoutDetails, setupModal, saveWorkout, setupAddExerciseModal, renderExercises } from "../ui/workout-ui.js";
import { requestCreateExercise, requestGetAllExercises } from "../api/exercise-api.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const response = await requestGetWorkoutById(id);
const btnDeleteWorkout = document.getElementById('btn-delete-workout')

renderWorkoutDetails(response.data)

async function handleDeleteWorkout() {
    const response = await requestDeleteWorkout(id);
    console.log(response)
    console.log(response.success)

    if (response.success) {
        window.location.href = "index.html"
    }
    else if (response.success === 0) {
        alert("Erro de rede.")  
    }
}

async function handleUpdateWorkout(name) {
    const response = await requestUpdateWorkoutName(id, name)
    await renderWorkoutDetails(response.data)
}

async function handleGetAllExercises() {
    const response = await requestGetAllExercises()
    renderExercises(response)
}

const exercise = {
    name: "Teste",
    muscleGroup: "CHEST"
}

const a = await requestCreateExercise(exercise)
console.log(a)


console.log(a.code)

const modal = setupModal();
setupDeleteButton(handleDeleteWorkout);
saveWorkout(modal, handleUpdateWorkout);
setupAddExerciseModal()
handleGetAllExercises( )