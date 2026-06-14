package com.personal.gym_flow_api.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.personal.gym_flow_api.entity.Exercise;
import com.personal.gym_flow_api.entity.MuscleGroup;
import com.personal.gym_flow_api.repository.ExerciseRepository;

import lombok.RequiredArgsConstructor;
@RequiredArgsConstructor


@Service
public class ExerciseService {
    private final ExerciseRepository exerciseRepository;

    @Transactional
    public Exercise create(Exercise exercise) {
        return exerciseRepository.save(exercise);
    }

    @Transactional(readOnly = true)
    public List<Exercise> findAll() {
        return exerciseRepository.findAll();

    }
    @Transactional(readOnly = true)
    public Exercise findById(Long id) {
        return exerciseRepository.findById(id).orElseThrow(
            () -> new RuntimeException()
        );
    }

    @Transactional
    public Exercise updateName(Long id, String newName) {
        Exercise ex = findById(id);
        ex.setName(newName);
        return ex;
    }

    @Transactional
    public Exercise updateExercise(Long id, String name, MuscleGroup muscleGroup) {
        Exercise ex = findById(id);
        ex.setName(name);
        ex.setMuscleGroup(muscleGroup);
        return ex;
    }

    @Transactional
    public void deleteExercise(Long id) {
        exerciseRepository.deleteById(id);
    }
}
