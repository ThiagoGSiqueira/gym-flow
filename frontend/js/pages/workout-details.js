import { getWorkoutById } from "../api/workout-api.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
