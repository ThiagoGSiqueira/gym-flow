package com.personal.gym_flow_api.web.dto.workout;

import java.util.List;

import com.personal.gym_flow_api.web.dto.exercise.ExerciseResponseDTO;

public record WorkoutResponseDTO (String name, List<ExerciseResponseDTO> exercises) {
    
}
