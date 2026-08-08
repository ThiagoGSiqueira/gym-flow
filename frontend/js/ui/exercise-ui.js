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
        console.log(exercise)
        callback(exercise);
        exerciseName.value = "";
        exerciseMuscleGroup.selectedIndex = 0;
    });
}