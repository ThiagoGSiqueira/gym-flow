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

export async function bindSaveWorkout(modalElement, callback) {
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

export function renderWorkoutExercises(exercisesResponse) {
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