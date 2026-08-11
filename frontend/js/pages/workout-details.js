import { initWorkoutDetailsController } from "../controller/workout-details-controller.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const workoutId = urlParams.get('id');

initWorkoutDetailsController(workoutId);