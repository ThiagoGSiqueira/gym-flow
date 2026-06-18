const param = new URLSearchParams(window.location.search);
const exerciseName = document.getElementById('exercise-name');
const exerciseId = document.getElementById('exercise-id');
const exerciseMuscleGroup = document.getElementById('exercise-muscle-group');

const id = param.get('id');

async function loadExercise(id) {
    const response = await fetch(`http://localhost:8080/exercises/${id}`)
    const data = await response.json();

    exerciseName.textContent = `${data.name}`;
    exerciseId.textContent = `Id: ${data.id}`;
    exerciseMuscleGroup.textContent = `Grupo Muscular: ${data.muscleGroup}`;    

    console.log(response.json());
}

loadExercise(id)