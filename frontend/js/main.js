import { createWorkout, getAllWorkouts } from "./api/workoutApi.js";
import { renderWorkouts, setupModal } from "./ui/workoutUi.js";

async function handleGetAllWorkouts() { 
    const data =  await getAllWorkouts()
    await renderWorkouts(data)
}

async function handleCreateWorkout(name) {
    const newWorkout = await createWorkout(name)
    await handleGetAllWorkouts()
}


handleGetAllWorkouts()
setupModal(handleCreateWorkout)