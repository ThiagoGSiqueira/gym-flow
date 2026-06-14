package com.personal.gym_flow_api.web.dto;

import com.personal.gym_flow_api.entity.MuscleGroup;

public record UpdateExerciseDTO (String name, MuscleGroup muscleGroup) {
    
}
