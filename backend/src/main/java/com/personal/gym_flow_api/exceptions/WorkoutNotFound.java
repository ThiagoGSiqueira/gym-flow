package com.personal.gym_flow_api.exceptions;

import org.springframework.http.HttpStatus;

import lombok.Getter;

@Getter
public class WorkoutNotFound extends BaseException{
    public WorkoutNotFound(String message, HttpStatus status) {
        super(message, status);
    }
}
