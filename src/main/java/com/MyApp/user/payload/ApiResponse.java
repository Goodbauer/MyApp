package com.MyApp.user.payload;

import org.springframework.http.ResponseEntity;

public class ApiResponse {
    private Boolean success;
    private String message;
    private ResponseEntity token;

    public ApiResponse(Boolean success, String message, ResponseEntity token) {
        this.success = success;
        this.message = message;
        this.token = token;
    }

    public ApiResponse(Boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public ResponseEntity getToken() {
        return token;
    }

    public void setToken(ResponseEntity token) {
        this.token = token;
    }
}
