package com.personal.gym_flow_api.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@Entity
@EntityListeners(AuditingEntityListener.class)

public class Workout {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", length = 30, nullable = false, unique = true)
    private String name;

    @ManyToMany
    @JoinTable(
        name = "workout_exercises", 
        joinColumns = @JoinColumn(name = "workout_id"), 
        inverseJoinColumns = @JoinColumn(name = "exercise_id")
    )

    private List<Exercise> exercises = new ArrayList<>();

    @CreatedDate
    @Column(name = "creation_date", length = 30, nullable = false, updatable = false)
    private LocalDateTime creationDate;
}
