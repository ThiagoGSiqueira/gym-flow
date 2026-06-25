package com.personal.gym_flow_api.exceptions;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.personal.gym_flow_api.web.dto.ErrorResponseDTO;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(BaseException.class)
    public ResponseEntity<ErrorResponseDTO> handleBaseException(BaseException ex) {

        ErrorResponseDTO errorResponseDTO = new ErrorResponseDTO(ex.getMessage(), ex.getStatus());

        return ResponseEntity.status(ex.getStatus()).body(errorResponseDTO);
    }
}
