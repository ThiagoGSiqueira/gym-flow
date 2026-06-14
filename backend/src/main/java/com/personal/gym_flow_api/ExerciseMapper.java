package com.personal.gym_flow_api;

import org.springframework.stereotype.Component;

import com.personal.gym_flow_api.entity.Exercise;
import com.personal.gym_flow_api.web.dto.ExerciseRequestDTO;
import com.personal.gym_flow_api.web.dto.ExerciseResponseDTO;

@Component
public class ExerciseMapper {
    public Exercise toEntity(ExerciseRequestDTO exerciseDTO) {
        Exercise ex = new Exercise();

        ex.setMuscleGroup(exerciseDTO.muscleGroup());
        ex.setName(exerciseDTO.name());

        return ex;
    }

    public ExerciseResponseDTO toDto(Exercise exercise) {
        ExerciseResponseDTO exDTO = new ExerciseResponseDTO(exercise.getId(), exercise.getName(), exercise.getMuscleGroup());
        return exDTO;
    
    }
}
