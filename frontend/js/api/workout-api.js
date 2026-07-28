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
        return { success: true, code: STATUS_CODE.SUCCESS, data: json };
    } catch (e) {
        return { success: false, code: STATUS_CODE.NETWORK_ERROR, data: null };
    }
}

export async function requestGetWorkoutById(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`)
        const json = await response.json()

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
        await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE'
        })
        return { success: true, code: STATUS_CODE.NO_CONTENT, data: null }
    } catch (e) {
        return { success: false, code: STATUS_CODE.NETWORK_ERROR, data: null }
    }
}

export async function requestUpdateWorkoutName(id, name) {
    console.log(id)
    console.log(name)
    console.log(`${BASE_URL}/${id}`)
    try {
        await fetch (`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name})
        })
        return { success: true, code: STATUS_CODE.SUCCESS, data: null}
    } catch (e) {
        return { success: false, code: STATUS_CODE.NETWORK_ERROR, data: null }
    }
}
