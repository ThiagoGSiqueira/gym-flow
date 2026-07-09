import { fetchAllWorkouts } from "./api/workoutApi.js";
import { renderWorkouts } from "./ui/workoutUi.js";

async function getAllWorkouts() { 
    const data =  await fetchAllWorkouts()
    renderWorkouts(data)
}

getAllWorkouts()
