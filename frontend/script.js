const URL = 'http://localhost:8080/exercises';
const exerciseList = document.getElementById('exercise-list');
const exerciseForm = document.getElementById('exercise-form')



async function loadExercises() {
    const response = await fetch(URL);

    if (response.status === 200) {
        const exercises = await response.json();
        
        let listExercise = '';
        exercises.forEach(exercise => {
            listExercise += `
                <li class="exercise-item">
                    <p>${exercise.name}</p>
                    <button type="button" class="btn-delete"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
                </li>`
            });

        exerciseList.innerHTML = listExercise;
    }
}

const exerciseName = document.getElementById('exercise-name');
const muscleGroup = document.getElementById('muscle-group');

exerciseForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const exercise = {
        name: exerciseName.value,
        muscleGroup: muscleGroup.value
    }

    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(exercise)
    });

    alert(exercise.name);
    loadExercises();
})

loadExercises();
