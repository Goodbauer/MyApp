package com.MyApp.user.payload;

import javax.validation.constraints.*;

public class SignUpRequest {

    @NotBlank
    @Size(min = 1, max = 15)
    private String username;

    @NotBlank
    @Size(min = 1, max = 20)
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

