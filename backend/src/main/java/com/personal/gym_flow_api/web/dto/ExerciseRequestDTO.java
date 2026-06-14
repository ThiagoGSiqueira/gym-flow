package com.personal.gym_flow_api.web.dto;

import com.personal.gym_flow_api.entity.MuscleGroup;

public record ExerciseRequestDTO (String name, MuscleGroup muscleGroup) {
    
}
