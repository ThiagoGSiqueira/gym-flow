import { getWorkoutById } from "../api/workout-api.js";
import { renderWorkoutDetails } from "../ui/workout-ui.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

const response = await getWorkoutById(id);

renderWorkoutDetails(response.data)