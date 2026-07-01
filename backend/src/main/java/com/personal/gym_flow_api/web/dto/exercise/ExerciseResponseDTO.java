package com.personal.gym_flow_api.web.dto.exercise;

import com.personal.gym_flow_api.entity.MuscleGroup;

public record ExerciseResponseDTO (Long id, String name, MuscleGroup muscleGroup) {
    
}
