import { initExerciseDetailsController } from "../controller/exercise-details-controller.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const exerciseId = urlParams.get('id');

initExerciseDetailsController(exerciseId)