export async function bindSaveExercise(modalElement, callback) {
    const exerciseName = document.getElementById('exercise-modal-input');
    const exerciseMuscleGroup = document.getElementById('exercise-modal-select')
    const saveButton = document.getElementById('exercise-save-btn');

    saveButton.addEventListener('click', () => {
        const exercise = {
            name: exerciseName.value,
            muscleGroup: exerciseMuscleGroup.value
        }
        modalElement.close();
        callback(exercise);
        exerciseName.value = "";
        exerciseMuscleGroup.selectedIndex = 0;
    });
}

export async function renderExerciseDetails(exercise) {
    const exerciseTitle = document.getElementById('exercise-title')
    const exerciseMuscleGroup = document.getElementById('exercise-muscle-group')

    //Mapeia para português sem alterar o objeto original (exercise), apenas pro visual (HTML)
    const muscleTranslations = {
        CHEST: "Peito",
        BACK: "Costas",
        SHOULDERS: "Ombro",
        ARMS: "Braço",
        CORE: "Core",
        LEGS: "Perna"
    };

    exerciseTitle.innerHTML = `${exercise.name}`
    exerciseMuscleGroup.innerHTML = muscleTranslations[exercise.muscleGroup] || exercise.muscleGroup
}

export async function setupDeleteExerciseButton(callback) {
    const deleteButton = document.getElementById('btn-delete-exercise')

    deleteButton.addEventListener('click', () => {
        callback()
    })
}