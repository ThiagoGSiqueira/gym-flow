package com.personal.gym_flow_api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.personal.gym_flow_api.entity.Exercise;
import com.personal.gym_flow_api.entity.Workout;
import com.personal.gym_flow_api.web.dto.exercise.ExerciseResponseDTO;
import com.personal.gym_flow_api.web.dto.workout.WorkoutRequestDTO;
import com.personal.gym_flow_api.web.dto.workout.WorkoutResponseDTO;

import lombok.RequiredArgsConstructor;
@RequiredArgsConstructor

@Component
public class WorkoutMapper {

    private final ExerciseMapper exerciseMapper;

    public Workout toEntity(WorkoutRequestDTO workoutDTO) {
        Workout wo = new Workout();

        wo.setName(workoutDTO.name());

        return wo;
    }

    public WorkoutResponseDTO toDto(Workout workout) {

        List<ExerciseResponseDTO> exDTO = new ArrayList<>();

        for (Exercise e : workout.getExercises())  {
            exDTO.add(exerciseMapper.toDto(e));
        }

        WorkoutResponseDTO woDTO = new WorkoutResponseDTO(workout.getId(), workout.getName(), exDTO);
        
        return woDTO;
    }

}
