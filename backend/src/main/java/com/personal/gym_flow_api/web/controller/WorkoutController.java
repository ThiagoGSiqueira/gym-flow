package com.personal.gym_flow_api.web.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.personal.gym_flow_api.WorkoutMapper;
import com.personal.gym_flow_api.entity.Workout;
import com.personal.gym_flow_api.service.WorkoutService;
import com.personal.gym_flow_api.web.dto.workout.WorkoutRequestDTO;
import com.personal.gym_flow_api.web.dto.workout.WorkoutResponseDTO;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/workout")
public class WorkoutController {
    
    private final WorkoutService workoutService;
    private final WorkoutMapper workoutMapper;

    @PostMapping
    public ResponseEntity<WorkoutResponseDTO> createWorkout(@Valid @RequestBody WorkoutRequestDTO workout) {
        
        Workout wo = workoutService.createWorkout(workoutMapper.toEntity(workout));
        WorkoutResponseDTO woDTO = workoutMapper.toDto(wo);
        return ResponseEntity.status(201).body(woDTO);
    }

}
