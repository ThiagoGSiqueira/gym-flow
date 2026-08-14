const BASE_URL = "http://localhost:8080/exercises"

const STATUS_CODE = {
    NETWORK_ERROR: 0,
    NOT_FOUND: 404,
    SUCCESS: 200,
    NO_CONTENT: 204,
    CREATED: 201,
    CONFLICT: 409
}

export async function requestGetAllExercises() {
    try {
        const response = await fetch(BASE_URL)
        const data = await response.json()

        if (!response.ok) {
            return { success: false, code: response.status, data: null }
        }

        return { success: true, code: STATUS_CODE.SUCCESS, data: data }
    } catch (e) {
        return { success: false, code: STATUS_CODE.NETWORK_ERROR, data: null }
    }
}

export async function requestCreateExercise(exercise) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(exercise)
        })

        if (!response.ok) {
            return { success: false, code: response.status, data: null }
        }

        return { success: true, code: STATUS_CODE.CREATED, data: null }
    } catch (e) {
        return { success: false, code: STATUS_CODE.NETWORK_ERROR, data: null }
    }
}

export async function requestGetExerciseById(exerciseId) {
    try {
        const response = await fetch(`${BASE_URL}/${exerciseId}`)
        const data = await response.json()

        if (!response.ok) {
            return { success: false, code: response.status, data: null }
        }

        return { success: true, code: STATUS_CODE.SUCCESS, data: data }
    } catch (e) {
        return { success: false, code: STATUS_CODE.NETWORK_ERROR, data: null }
    }
}