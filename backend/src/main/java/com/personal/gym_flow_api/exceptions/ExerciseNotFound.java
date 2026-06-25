package com.personal.gym_flow_api.exceptions;

import org.springframework.http.HttpStatus;

public class ExerciseNotFound extends BaseException{
    public ExerciseNotFound(String message, HttpStatus status) {
        super(message, status);
    }
}
