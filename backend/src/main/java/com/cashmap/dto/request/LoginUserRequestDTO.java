package com.cashmap.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class LoginUserRequestDTO {
    @Email(message = "Invalid mail")
    @NotBlank(message = "mail is required")
    private String mail;
    @NotBlank(message = "Password is required")
    private String password;

    // Getters and Setters
    public String getMail() {
        return mail;
    }

    public void setmail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
