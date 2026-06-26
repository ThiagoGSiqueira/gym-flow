package com.personal.gym_flow_api.web.dto;


public class ErrorResponseDTO {
    private final String message;
    private final int status;
    
    public ErrorResponseDTO(String message, int status) {
        this.message = message;
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public int getStatus() {
        return status;
    }

}
