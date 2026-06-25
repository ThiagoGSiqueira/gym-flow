package com.personal.gym_flow_api.web.dto;

import org.springframework.http.HttpStatus;

public class ErrorResponseDTO {
    private final String message;
    private final HttpStatus status;
    
    public ErrorResponseDTO(String message, HttpStatus status) {
        this.message = message;
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public HttpStatus getStatus() {
        return status;
    }

}
