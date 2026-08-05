export function renderWorkouts(workoutsList) {
    const listContainer = document.getElementById("list-container");

    listContainer.innerHTML = "";

    workoutsList.forEach(workout => {
        listContainer.innerHTML += `
            <a href="workout-details.html?id=${workout.id}" class="list-link">
                <li class="list-item">
                    <p>${workout.name}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                        <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                    </svg>
                </li>
            </a>
        `;
    });
}

export function renderWorkoutDetails(workout) {
    const workoutTitle = document.getElementById('workout-title');

    workoutTitle.innerHTML = `${workout.name}`;

    workout.exercises.forEach((exercise) => {
        listContainer.innerHTML += `
            <li class="list-item">
                <p>${exercise.name}</p>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red">
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                </button>
            </li>
        `;
    });
}

export async function saveWorkout(modalElement, callback) {
    const modalInput = document.getElementById('workout-modal-input');
    const saveButton = document.getElementById('workout-save-btn');

    saveButton.addEventListener('click', () => {
        const workoutName = modalInput.value;
        modalElement.close();
        callback(workoutName);
        modalInput.value = "";
    });
}

export function setupDeleteButton(callback) {
    const deleteButton = document.getElementById('btn-delete-workout');

    deleteButton.addEventListener('click', () => {
        callback();
    });
}

export function setupAddExerciseModal() {
    const exerciseModal = document.getElementById('exercise-modal');
    const openExerciseModalButton = document.getElementById('exercise-modal-add-btn');
    const closeExerciseModalButton = document.getElementById('exercise-modal-close-btn');

    openExerciseModalButton.addEventListener('click', () => {
        exerciseModal.showModal();
    });

    closeExerciseModalButton.addEventListener('click', () => {
        exerciseModal.close();
    });
}

export function renderExercises(exercisesResponse) {
    const exerciseList = document.getElementById('exercise-select-list');

    exerciseList.innerHTML = "";

    exercisesResponse.data.forEach(exercise => {
        exerciseList.innerHTML += `
            <li class="exercise-item-option">
                <span>${exercise.name}</span>
                <span class="exercise-action">+ Adicionar</span>    
            </li>
        `;
    });
}