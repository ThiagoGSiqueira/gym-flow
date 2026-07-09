const BASE_URL = "http://localhost:8080/workout"

export async function fetchAllWorkouts() {
    const data = await fetch(BASE_URL);
    return await data.json();
}

