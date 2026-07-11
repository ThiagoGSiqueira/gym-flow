const BASE_URL = "http://localhost:8080/workout"

export async function getAllWorkouts() {
    const data = await fetch(BASE_URL);
    return await data.json();
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