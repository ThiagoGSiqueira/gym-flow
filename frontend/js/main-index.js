import { createExercise, getAllExercises } from "./api.js";

const ui = {
    exerciseList: document.getElementById('exercise-list'),
    exerciseForm: document.getElementById('exercise-form'),
    exerciseName: document.getElementById('exercise-name'),
    exerciseMuscleGroup: document.getElementById('muscle-group')
};


async function loadExercises() {
    const exercises = await getAllExercises();

    if (exercises === false) {
        alert("Não foi possível carregar os exercícios.");
        return
    } else if (exercises.length === 0) {
        alert('Sem exercícios cadastrados.');
        return
    }

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

    ui.exerciseList.innerHTML = listExercise;
}

ui.exerciseForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const newExercise = {
        name: ui.exerciseName.value,
        muscleGroup: ui.exerciseMuscleGroup.value
    }

    if (!newExercise.name || !newExercise.muscleGroup) {
        alert('Ambos os campos devem ser preenchidos.');
    } else if (newExercise.name.length > 30) {
        alert('Nome deve ter menos do que 30 caracteres');
    }
    else {
        if (await createExercise(newExercise)) {
            loadExercises();
            ui.exerciseForm.reset();
        }
        alert("Não foi possível criar o exercício, tente novamente.");
    }
})

loadExercises();