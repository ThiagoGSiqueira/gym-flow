import { requestDeleteWorkout, requestGetWorkoutById, requestUpdateWorkoutName } from "../api/workout-api.js";
import { setupDeleteButton, renderWorkoutDetails, setupModal } from "../ui/workout-ui.js";


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const response = await requestGetWorkoutById(id);
const btnDeleteWorkout = document.getElementById('btn-delete-workout')

renderWorkoutDetails(response.data)

async function handleDelete() {
    alert('entrou aq ')
    const response = await requestDeleteWorkout(id);

    console.log(response.success)

    if (response.success) {
        window.location.href = "index.html"
    }
    else {
        //Trocar para dmensagem vinda da UI.
        alert("Erro de rede.")
    }
}

setupDeleteButton(handleDelete);