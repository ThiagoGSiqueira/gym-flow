const BASE_URL = 'http://localhost:8080/exercises';
export async function getAllExercises() {
    try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText}`)
        }
        return await response.json();
    } catch (e) {
        console.error("Falha na requisição: ", e.message);
        return false;
    }
}


export async function createExercise(newExercise) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newExercise)
        });

        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText}`)
        }

        return true;
    } catch (e) {
        console.error("Falha na requisição: ", e.message);
        return false;
    }
}

export async function getExerciseById(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`)

        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText}`)
        }

return await response.json();

    } catch (e) {
        console.error("Falha na requisição: ", e.message);
        return false;
    }

}

export async function deleteExercise(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE'
        })
        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText}`)
        }
        return true;
    } catch (e) {
        console.error("Falha na requisição: ", e.message);
        return false;
    }

}

export async function updateName(id, newName) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newName
            })
        })

        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText}`)
        }

        return true;
    } catch (e) {
        console.error("Falha na requisição: ", e.message);
        return false;
    }

}

export async function updateExercise(id, newExercise) {
    try {
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

        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText}`)
        }

        return true;
    } catch (e) {
        console.error("Falha na requisição: ", e.message);
        return false;
    }
}