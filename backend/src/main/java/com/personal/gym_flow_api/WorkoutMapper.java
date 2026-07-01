package com.personal.gym_flow_api;

import org.springframework.stereotype.Component;

import com.personal.gym_flow_api.entity.Workout;
import com.personal.gym_flow_api.web.dto.workout.WorkoutRequestDTO;
import com.personal.gym_flow_api.web.dto.workout.WorkoutResponseDTO;

@Component
public class WorkoutMapper {
    public Workout toEntity(WorkoutRequestDTO workoutDTO) {
        Workout wo = new Workout();

        wo.setName(workoutDTO.name());

        return wo;
    }

    public WorkoutResponseDTO toDto(Workout workout) {
        WorkoutResponseDTO woDTO = new WorkoutResponseDTO(workout.getName(), workout.getExercises());

        return woDTO;
    }

}
