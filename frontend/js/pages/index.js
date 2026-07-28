import { requestCreateWorkout, requestGetAllWorkouts } from "../api/workout-api.js";
import { renderWorkouts, setupModal } from "../ui/workout-ui.js";

async function handleGetAllWorkouts() {
    const data = await requestGetAllWorkouts()

    if (data.success === false) {
        alert("Não foi possível conectar-se ao servidor. Por favor, tente novamente mais tarde.")
        return
    }
    await renderWorkouts(data.data)
}

async function handleCreateWorkout(name) {
    const data = await requestCreateWorkout(name)

    if (data.success === false) {
        if (data.code === 409) {
            alert(`A ficha de nome "${name}" já existe.`)
            return
        } else if (data.code === 400) {
            alert("Erro no envio. Por favor, verifique os campos.")
            return
        }
        alert(`Erro: ${data.code}. Não foi possível conectar-se ao servidor. Por favor, tente novamente mais tarde.`)
        return
    }

    await handleGetAllWorkouts()
}

handleGetAllWorkouts()
setupModal(handleCreateWorkout)