const param = new URLSearchParams(window.location.search);
const exerciseName = document.getElementById('exercise-name');
const exerciseId = document.getElementById('exercise-id');
const exerciseMuscleGroup = document.getElementById('exercise-muscle-group');
const URL = 'http://localhost:8080/exercises/';

const id = param.get('id');

async function loadExercise(id) {
    const response = await fetch(`${URL}${id}`)
    const data = await response.json();

    exerciseName.textContent = `${data.name}`;
    exerciseId.textContent = `Id: ${data.id}`;
    exerciseMuscleGroup.textContent = `Grupo Muscular: ${data.muscleGroup}`;
}

loadExercise(id)

const btnDelete = document.getElementById('btn-delete');

btnDelete.addEventListener('click', () => {
    deleteExercise(id);
})

async function deleteExercise(id) {
    const response = await fetch(`${URL}${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    )
    window.location.href = "index.html";
}

const modal = document.getElementById('modal-form');
const btnEdit = document.getElementById('btn-edit');
const btnSaveUpdate = document.getElementById('save-update');
const btnCloseModal = document.getElementById('close-modal');
const newExerciseName = document.getElementById('name-exercise');
const newMuscleGroup = document.getElementById('muscle-group');

btnEdit.addEventListener('click', (e) => {
    modal.showModal();
})

btnSaveUpdate.addEventListener('click', (e) => {

    const newExercise = {
        name: newExerciseName.value,
        muscleGroup: newMuscleGroup.value
    }

    console.log(newMuscleGroup.value);

    if (!newExercise.muscleGroup) {
        updateName(id, newExerciseName.value);
    }
    else {
        updateExercise(id, newExercise);
    }
})

btnCloseModal.addEventListener('click', () => {
    modal.close();
})

async function updateName(id, newName) {
    console.log('Chamou update name');
    const response = await fetch(`${URL}${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newName
        })
    })
    refreshUI();
}

async function updateExercise(id, newExercise) {
    console.log('chamou updateExercise');
    const response = await fetch(`${URL}${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newExercise.name,
            muscleGroup: newExercise.muscleGroup
        })
    })
    refreshUI();
}

function refreshUI() {
    loadExercise(id);
    modal.close();
}