package com.personal.gym_flow_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.personal.gym_flow_api.entity.Exercise;

public interface ExerciseRepository extends JpaRepository<Exercise, Long>{
   
}
