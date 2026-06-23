import { getExerciseById, deleteExercise, updateName, updateExercise } from './api.js';


const ui = {
    id: new URLSearchParams(window.location.search).get('id'),
    exerciseName: document.getElementById('exercise-name'),
    exerciseId: document.getElementById('exercise-id'),
    exerciseMuscleGroup: document.getElementById('exercise-muscle-group'),
    btnDelete: document.getElementById('btn-delete'),
    modal: document.getElementById('modal-form'),
    btnEdit: document.getElementById('btn-edit'),
    btnSaveUpdate: document.getElementById('save-update'),
    btnCloseModal: document.getElementById('close-modal'),
    newExerciseName: document.getElementById('name-exercise'),
    newMuscleGroup: document.getElementById('muscle-group')
};

async function loadExercise() {
    const exercise = await getExerciseById(ui.id);

    if (!exercise) {
        alert("Não foi possível carregar o exercício atual.")
        window.location.href="index.html"
    }

    ui.exerciseName.textContent = `${exercise.name}`;
    ui.exerciseId.textContent = `Id: ${exercise.id}`;
    ui.exerciseMuscleGroup.textContent = `Grupo Muscular: ${exercise.muscleGroup}`;
}

ui.btnDelete.addEventListener('click', async (e) => {

    const response = await deleteExercise(ui.id)

    if (!response) {
        alert('Não foi possível deletar, tente novamente.')
        return;
    }

    window.location.href = "index.html";
})

ui.btnEdit.addEventListener('click', (e) => {
    ui.modal.showModal();
})

ui.btnCloseModal.addEventListener('click', () => {
    ui.modal.close();
})

ui.btnSaveUpdate.addEventListener('click', async (e) => {

    let response = null;

    const newExercise = {
        name: ui.newExerciseName.value,
        muscleGroup: ui.newMuscleGroup.value
    }

    if (!newExercise.name) {
        alert('Nome não pode estar vazio');
        return
    } else if (newExercise.name.length > 30) {
        alert('Nome deve ter menos do que 30 caracteres');
        return
    }

    if (!newExercise.muscleGroup) {
        response = await updateName(ui.id, ui.newExerciseName.value);
    }
    else {
        response = await updateExercise(ui.id, newExercise);
    }

    if(!response) {
        alert("Não foi possível alterar o exercício, tente novamente.")
    }

    refreshUI();
})

async function refreshUI() {
    await loadExercise(ui.id);
    ui.modal.close();
}

loadExercise();