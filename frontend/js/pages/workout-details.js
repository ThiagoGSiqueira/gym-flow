import { requestDeleteWorkout, requestGetWorkoutById, requestUpdateWorkoutName } from "../api/workout-api.js";
import { setupDeleteButton, renderWorkoutDetails, setupSaveWorkout } from "../ui/workout-ui.js";


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const response = await requestGetWorkoutById(id);
const btnDeleteWorkout = document.getElementById('btn-delete-workout')

renderWorkoutDetails(response.data)

async function handleDeleteWorkout() {
    const response = await requestDeleteWorkout(id);

    console.log(response.success)

    if (response.success) {
        window.location.href = "index.html"
    }
    else if (response.success === 0) {
        alert("Erro de rede.")
    }
}

async function handleUpdateWorkout(name) {
    console.log(name)
    const x = await requestUpdateWorkoutName(id, name)
    console.log(x)
    await renderWorkoutDetails(x.data)
}

setupDeleteButton(handleDeleteWorkout);
setupSaveWorkout(handleUpdateWorkout);