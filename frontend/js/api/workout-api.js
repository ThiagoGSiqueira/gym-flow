const BASE_URL = "http://localhost:8080/workout"

const STATUS_CODE = {
    NETWORK_ERROR: 0,
    NOT_FOUND: 404,
    SUCCESS: 200,
    NO_CONTENT: 204,
    CREATED: 201
}

export async function requestGetAllWorkouts() {
    try {
        const response = await fetch(BASE_URL);
        const json = await response.json()

        if (!response.ok) {
            return { success: true, code: response.status, data: null };
        }

        return { success: true, code: STATUS_CODE.SUCCESS, data: json };
    } catch (e) {
        return { success: false, code: STATUS_CODE.NETWORK_ERROR, data: null };
    }
}

export async function requestGetWorkoutById(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`)
        const json = await response.json()

        if (!response.ok) {
            return { success: true, code: response.status, data: null };
        }

        return { success: true, code: STATUS_CODE.SUCCESS, data: json }
    }
    catch (e) {
        return { success: false, code: STATUS_CODE.NETWORK_ERROR, data: null }
    }
}

export async function requestCreateWorkout(name) {
    try {
        const workout = {
            name: name
        }

        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workout)
        })

        if (!response.ok) {
            return { success: false, code: response.status, data: null }
        }

        return { success: true, code: STATUS_CODE.CREATED, data: null }
    } catch (e) {
        return { success: false, code: STATUS_CODE.NETWORK_ERROR, data: null }
    }
}

export async function requestDeleteWorkout(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            console.log('caiu no if')
            return { success: false, code: response.status, data: null };
        }

        return { success: true, code: STATUS_CODE.NO_CONTENT, data: null }
    } catch (e) {
        return { success: false, code: STATUS_CODE.NETWORK_ERROR, data: null }
    }
}

export async function requestUpdateWorkoutName(id, name) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        })

        const data = await response.json()

        if (!response.ok) {
            return { success: true, code: response.status, data: null };
        }

        return { success: true, code: STATUS_CODE.SUCCESS, data: data }
    } catch (e) {
        return { success: false, code: STATUS_CODE.NETWORK_ERROR, data: null }
    }
}
