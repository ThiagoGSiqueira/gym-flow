package com.personal.gym_flow_api.exceptions;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import com.personal.gym_flow_api.web.dto.ErrorResponseDTO;

import tools.jackson.databind.exc.UnrecognizedPropertyException;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BaseException.class)
    public ResponseEntity<ErrorResponseDTO> handleBaseException(BaseException ex) {

        ErrorResponseDTO errorResponseDTO = new ErrorResponseDTO(ex.getMessage(), ex.getStatus().value());

        return ResponseEntity.status(ex.getStatus()).body(errorResponseDTO);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponseDTO> handleMethodArgumentNotValid(MethodArgumentNotValidException ex) {
        String message = ex.getBindingResult().getAllErrors().get(0).getDefaultMessage();

        ErrorResponseDTO errorResponseDTO = new ErrorResponseDTO(message, HttpStatus.BAD_REQUEST.value());

        return ResponseEntity.badRequest().body(errorResponseDTO);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ErrorResponseDTO> handleHttpMessageNotReadableException(HttpMessageNotReadableException ex) {

        if (ex.getCause() instanceof UnrecognizedPropertyException cause) {
            ErrorResponseDTO error = new ErrorResponseDTO(
                    "Campo extra não permitido: " + cause.getPropertyName(),
                    HttpStatus.BAD_REQUEST.value());
            return ResponseEntity.badRequest().body(error);
        }

        ErrorResponseDTO errorResponseDTO = new ErrorResponseDTO("Formato do JSON inválido",
                HttpStatus.BAD_REQUEST.value());
        return ResponseEntity.badRequest().body(errorResponseDTO);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ErrorResponseDTO> handleMethodArgumentTypeMismatchException(
            MethodArgumentTypeMismatchException ex) {
        ErrorResponseDTO errorResponseDTO = new ErrorResponseDTO("Parâmetro da URL inválido.",
                HttpStatus.BAD_REQUEST.value());

        return ResponseEntity.badRequest().body(errorResponseDTO);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ErrorResponseDTO> handleDataIntegrityViolationException(DataIntegrityViolationException ex) {

        if (ex.getRootCause() != null && ex.getRootCause().getMessage().contains("Duplicate entry")) {
            return ResponseEntity.status(409).body(new ErrorResponseDTO("O conteúdo já existe", 409));
        }

        return ResponseEntity.status(500).body(new ErrorResponseDTO("Problema de integridade no banco.", 500));

    }

}
