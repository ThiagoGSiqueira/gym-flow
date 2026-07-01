package com.personal.gym_flow_api.service;

import org.springframework.stereotype.Service;

import com.personal.gym_flow_api.entity.Workout;
import com.personal.gym_flow_api.repository.WorkoutRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class WorkoutService {

    private final WorkoutRepository workoutRepository;

    @Transactional 
    public Workout createWorkout(Workout workout) {{
        workoutRepository.save(workout);
        return workout;
    }}
}
