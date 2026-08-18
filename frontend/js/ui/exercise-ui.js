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

    //Descobrir um jeito de mapear isso melhor
    if(exercise.muscleGroup === "CHEST") {
        exercise.muscleGroup = "Peito"
    } else if (exercise.muscleGroup === "BACK") {
        exercise.muscleGroup = "Costas"
    } else if (exercise.muscleGroup === "SHOULDERS") {
        exercise.muscleGroup = "Ombro"
    } else if(exercise.muscleGroup === "ARMS") {
        exercise.muscleGroup = "Braço"
    } else if (exercise.muscleGroup === "CORE") {
        exercise.muscleGroup = "Core"
    } else if (exercise.muscleGroup === "LEGS") {
        exercise.muscleGroup = "Perna"
    }

    exerciseTitle.innerHTML = `${exercise.name}`
    exerciseMuscleGroup.innerHTML = `${exercise.muscleGroup}`
}

export async function setupDeleteExerciseButton(callback) {
    const deleteButton = document.getElementById('btn-delete-exercise')
    
    deleteButton.addEventListener('click', () => {
        callback()
    })
}