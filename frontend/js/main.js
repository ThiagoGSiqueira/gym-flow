import { createWorkout, getAllWorkouts } from "./api/workoutApi.js";
import { renderWorkouts, setupModal } from "./ui/workoutUi.js";

async function handleGetAllWorkouts() {
    const data = await getAllWorkouts()

    if (data.success === false) {
        alert(data.message)
        return
    }
    await renderWorkouts(data.data)
}

async function handleCreateWorkout(name) {
    const newWorkout = await createWorkout(name)
    await handleGetAllWorkouts()
}

handleGetAllWorkouts()
setupModal(handleCreateWorkout)