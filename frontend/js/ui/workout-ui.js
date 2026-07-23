const listContainer = document.getElementById("list-container")
const workoutTitle = document.getElementById('workout-title')

export function renderWorkouts(data) {

    listContainer.innerHTML = "";

    data.forEach(workout => {
        listContainer.innerHTML += `
                <a href="workout-details.html?id=${workout.id}" class="list-link">
                    <li class="list-item">
                        <p>${workout.name}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="#e3e3e3">
                            <path
                                d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                        </svg>
                    </li>
                </a>
    `
    });
}

export function renderWorkoutDetails(workout) {
    workoutTitle.innerHTML = `ID: ${workout.id} | ${workout.name}`
    let count = 0;

    workout.exercises.forEach((exercise) => {
        listContainer.innerHTML += `
        <li class="list-item">
                    <p>${exercise.name}</p>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="red">
                            <path
                                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                        </svg>
                    </button>
                </li>`
    })
}
   
export function setupModal(callback) {

    const workoutModal = document.getElementById('workout-modal')
    const btnWorkoutOpenModal = document.getElementById("btn-open-modal")
    const btnWorkoutCloseModal = document.getElementById("btn-close-modal")
    const btnCreateWorkout = document.getElementById('btn-create-workout')
    const modalInput = document.getElementById('modal-input')

    btnCreateWorkout.addEventListener('click', () => {
        const workoutName = modalInput.value;
        workoutModal.close()
        callback(workoutName)
        modalInput.value = "";
    })

     btnWorkoutOpenModal.addEventListener('click', () => {
        workoutModal.showModal()
    })


    btnWorkoutCloseModal.addEventListener('click', () => {
        workoutModal.close()
    })
}