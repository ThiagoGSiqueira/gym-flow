package com.personal.gym_flow_api.web.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.personal.gym_flow_api.ExerciseMapper;
import com.personal.gym_flow_api.entity.Exercise;
import com.personal.gym_flow_api.service.ExerciseService;
import com.personal.gym_flow_api.web.dto.exercise.ExerciseRequestDTO;
import com.personal.gym_flow_api.web.dto.exercise.ExerciseResponseDTO;
import com.personal.gym_flow_api.web.dto.exercise.ExerciseUpdateNameDTO;
import com.personal.gym_flow_api.web.dto.exercise.UpdateExerciseDTO;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
@RequiredArgsConstructor

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/exercises")
public class ExerciseController {
    private final ExerciseService exerciseService;   
    private final ExerciseMapper exerciseMapper;

    @PostMapping
    public ResponseEntity<ExerciseResponseDTO> createExercise(@Valid @RequestBody ExerciseRequestDTO exerciseDTO){
        Exercise exercise = exerciseMapper.toEntity(exerciseDTO);
        Exercise response = exerciseService.create(exercise);
        ExerciseResponseDTO responseDTO = exerciseMapper.toDto(response);
        return ResponseEntity.status(201).body(responseDTO);
    }

    @GetMapping
    public ResponseEntity<List<ExerciseResponseDTO>> findAll(){
        List<Exercise> response = exerciseService.findAll();

        List<ExerciseResponseDTO> responseDTO = response.stream().map(x -> exerciseMapper.toDto(x)).toList();

        return ResponseEntity.ok(responseDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ExerciseResponseDTO> findById(@PathVariable Long id){
        Exercise response = exerciseService.findById(id);
        ExerciseResponseDTO responseDTO = exerciseMapper.toDto(response);
        return ResponseEntity.ok(responseDTO);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ExerciseResponseDTO> updateName(@PathVariable Long id, @Valid @RequestBody ExerciseUpdateNameDTO ex) {
        Exercise response = exerciseService.updateName(id, ex.name());
        ExerciseResponseDTO responseDTO = exerciseMapper.toDto(response);
        return ResponseEntity.ok(responseDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ExerciseResponseDTO> updateExercise(@PathVariable Long id, @Valid @RequestBody UpdateExerciseDTO ex) {
            Exercise response = exerciseService.updateExercise(id, ex.name(), ex.muscleGroup());
        ExerciseResponseDTO responseDTO = exerciseMapper.toDto(response);
        return ResponseEntity.ok(responseDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExercise(@PathVariable Long id) {
        exerciseService.deleteExercise(id);
        return ResponseEntity.noContent().build();
    }
}
