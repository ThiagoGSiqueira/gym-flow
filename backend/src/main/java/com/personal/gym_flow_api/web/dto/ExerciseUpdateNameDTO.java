package com.personal.gym_flow_api.web.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ExerciseUpdateNameDTO (
    @NotBlank(message = "O nome não pode estar vázio.")
    @Size(max = 30, message = "O nome pode ter no máximo 30 caracteres.")
    String name){
    
}
