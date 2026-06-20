const BASE_URL = 'http://localhost:8080/exercises';
export async function getAllExercises() {
    const response = await fetch(BASE_URL);

    if (!response.ok) throw new Error("Erro ao buscar exercícios");
    return await response.json();
}


export async function createExercise(newExercise) {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newExercise)
    });

    return response.ok;
}

export async function getExerciseById(id) {
    const response = await fetch(`${BASE_URL}/${id}`)
    return await response.json();
}

export async function deleteExercise(id) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    })
    return response.ok;
}

export async function updateName(id, newName) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newName
        })
    })
    return response.ok;
}

export async function updateExercise(id, newExercise) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newExercise.name,
            muscleGroup: newExercise.muscleGroup
        })
    })
    return response.ok;
}