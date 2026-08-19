const BASE_URL = "http://localhost:8080/workout";

const STATUS_CODE = {
    NETWORK_ERROR: 0,
    NOT_FOUND: 404,
    SUCCESS: 200,
    NO_CONTENT: 204,
    CREATED: 201
};

export async function requestGetAllWorkouts() {
    try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        if (!response.ok) {
            return { success: true, code: response.status, data: null };
        }

        return { success: true, code: STATUS_CODE.SUCCESS, data: json };
    } catch (error) {
        return { success: false, code: STATUS_CODE.NETWORK_ERROR, data: null };
    }
}

export async function requestGetWorkoutById(workoutId) {
    try {
        const response = await fetch(`${BASE_URL}/${workoutId}`);
        const json = await response.json();

        if (!response.ok) {
            return { success: true, code: response.status, data: null };
        }

        return { success: true, code: STATUS_CODE.SUCCESS, data: json };
    } catch (error) {
        return { success: false, code: STATUS_CODE.NETWORK_ERROR, data: null };
    }
}

export async function requestCreateWorkout(workoutName) {
    try {
        const workoutData = {
            name: workoutName
        };

        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workoutData)
        });

        if (!response.ok) {
            return { success: false, code: response.status, data: null };
        }

        return { success: true, code: STATUS_CODE.CREATED, data: null };
    } catch (error) {
        return { success: false, code: STATUS_CODE.NETWORK_ERROR, data: null };
    }
}

export async function requestDeleteWorkout(workoutId) {
    try {
        const response = await fetch(`${BASE_URL}/${workoutId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            return { success: false, code: response.status, data: null };
        }

        return { success: true, code: STATUS_CODE.NO_CONTENT, data: null };    } catch (error) {
        return { success: false, code: STATUS_CODE.NETWORK_ERROR, data: null };
    }
}

export async function requestUpdateWorkoutName(workoutId, workoutName) {
    try {
        const response = await fetch(`${BASE_URL}/${workoutId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: workoutName })
        });

        const json = await response.json();

        if (!response.ok) {
            return { success: true, code: response.status, data: null };
        }

        return { success: true, code: STATUS_CODE.SUCCESS, data: json };
    } catch (error) {
        return { success: false, code: STATUS_CODE.NETWORK_ERROR, data: null };
    }
}