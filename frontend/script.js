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
                    <div>
                        <a href="edit.html?id=${exercise.id}" type="button" class="btn-edit"">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFF"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>                        
                        </a>
                    </div>
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
    loadExercises();
})

loadExercises();
