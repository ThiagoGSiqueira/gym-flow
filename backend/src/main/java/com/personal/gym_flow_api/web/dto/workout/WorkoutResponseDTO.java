package com.personal.gym_flow_api.web.dto.workout;

import java.util.List;

import com.personal.gym_flow_api.entity.Exercise;

public record WorkoutResponseDTO (String name, List<Exercise> exercises) {
    
}
