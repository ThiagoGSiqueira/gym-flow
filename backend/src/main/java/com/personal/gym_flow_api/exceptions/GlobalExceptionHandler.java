package com.personal.gym_flow_api.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
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

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponseDTO> handleMethodArgumentNotValid(MethodArgumentNotValidException ex) {
        String message = ex.getBindingResult().getAllErrors().get(0).getDefaultMessage();

        ErrorResponseDTO errorResponseDTO = new ErrorResponseDTO(message, HttpStatus.BAD_REQUEST);

        return ResponseEntity.badRequest().body(errorResponseDTO);
    }
}
