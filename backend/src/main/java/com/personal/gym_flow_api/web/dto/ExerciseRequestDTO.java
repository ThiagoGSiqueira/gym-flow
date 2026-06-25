package com.personal.gym_flow_api.web.dto;

import com.personal.gym_flow_api.entity.MuscleGroup;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record ExerciseRequestDTO (
    @NotBlank(message = "O nome não pode estar vázio.")
    @Size(max = 30, message = "O nome pode ter no máximo 30 caracteres.")
    String name, 
    @NotNull(message = "O gupo muscular não pode ser nulo.")
    MuscleGroup muscleGroup) { 
}
