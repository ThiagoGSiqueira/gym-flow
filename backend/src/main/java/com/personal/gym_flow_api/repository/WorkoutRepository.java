package com.personal.gym_flow_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.personal.gym_flow_api.entity.Workout;

@Repository
public interface WorkoutRepository extends JpaRepository<Workout, Long>{
    
}
