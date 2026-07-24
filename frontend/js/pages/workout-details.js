import { deleteWorkout, getWorkoutById } from "../api/workout-api.js";
import { renderWorkoutDetails } from "../ui/workout-ui.js";


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const response = await getWorkoutById(id);
const btnDeleteWorkout = document.getElementById('btn-delete-workout')

renderWorkoutDetails(response.data)

btnDeleteWorkout.addEventListener('click', async () => {
    const response = await deleteWorkout(id);

    console.log(response.success)

    if (response.success) {
        window.location.href = "index.html"
    }
    else {
        //Trocar para mensagem vinda da UI.
        alert("Erro de rede.")
    }
})