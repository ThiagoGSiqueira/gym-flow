const BASE_URL = "http://localhost:8080/workout"

export async function getAllWorkouts() {
    try {
        const response = await fetch(BASE_URL);
        const json = await response.json()
        return { success: true, data: json };
    } catch (e) {
        console.error(`Log técnico: ${e.message}`)
        return { message: "Não foi possível conectar ao servidor. Tente novamente mais tarde.", success: false };
    }
}

export async function createWorkout(name) {
    const workout = {
        name: name
    }

    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(workout)
    })

    return workout
}