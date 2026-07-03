package com.personal.gym_flow_api.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.personal.gym_flow_api.entity.Exercise;
import com.personal.gym_flow_api.entity.Workout;
import com.personal.gym_flow_api.repository.WorkoutRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class WorkoutService {

    private final WorkoutRepository workoutRepository;
    private final ExerciseService exerciseService;

    @Transactional 
    public Workout createWorkout(Workout workout) {{
        workoutRepository.save(workout);
        return workout;
    }}

    @Transactional(readOnly = true)
    public List<Workout> getAllWorkouts() {
       return  workoutRepository.findAll();
    }

    public Workout getById(Long id) {
        return workoutRepository.findById(id).orElseThrow();
    }

    @Transactional
    public Exercise addExercise(Long workoutId, Long exerciseId) {
       Workout workout = workoutRepository.findById(workoutId).orElseThrow();
       Exercise exercise = exerciseService.findById(exerciseId);

       workout.getExercises().add(exercise);

       return exercise;
    }

   

}
